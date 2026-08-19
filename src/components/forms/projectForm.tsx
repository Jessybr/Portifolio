import { useEffect, useState, type ChangeEvent } from "react"
import axios from "axios"
import { handleApiError, showSuccessToast } from "../../utils/toast"
import useSkills from "../../utils/useSkills"

interface ProjectFormProps {
    displayProjectForm: boolean
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
    allProjects: ProjectData[]
    loadAllProjects: () => Promise<void>
    loadActiveProjects: () => Promise<void>
    createProject: (formData: ProjectRequest) => Promise<void>
    updateProject: (formData: ProjectRequest, projectId: number) => Promise<void>
    deleteProject: (projectId: number) => Promise<void>
    findProjectByName: (name: string) => Promise<ProjectData | null>
    updateStatusProject: (projectId: number) => Promise<ProjectData | null>
}

interface ProjectData {
    id: number
    nome: string
    descricao: string
    ativo: boolean
    videoSrc: string
    videoPublicId: string
    imagemSrc: string
    imagemPublicId: string
    deployUrl: string
    githubUrl: string
    tecnologias: Array<{
        tecnologia_id: number
        projeto_id: number
        tecnologia: {
            id: number
            nome: string
            iconeSrc: string
        }
    }>
}

interface ProjectRequest {
    nome: string
    descricao: string
    ativo: string
    videoSrc: File | null
    imagemSrc: File | null
    deployUrl: string
    githubUrl: string
    tecnologias: number[]
}

function ProjectForm({ displayProjectForm, setDisplayProjectForm, allProjects, loadAllProjects, loadActiveProjects, createProject, updateProject, deleteProject, findProjectByName, updateStatusProject }: ProjectFormProps) {
    const [projectId, setProjectId] = useState(0)
    const [projectStatus, setProjectStatus] = useState(false)
    const [selectedProject, setSelectedProject] = useState<string>('');
    const {technologies, loadSkills} = useSkills()
    const [formData, setFormData] = useState<ProjectRequest>({
        nome: '',
        descricao: '',
        ativo: '',
        videoSrc: null,
        imagemSrc: null,
        deployUrl: '',
        githubUrl: '',
        tecnologias: []
    })

    async function loadProjects() {
        try {
            const response = await getAllProjects()
            setProjects(response.data.data)
        } catch(error) {
            console.error("Erro ao carregar projetos", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
            loadProjects()
    }, [])

    const handleTextInputValue = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evento.target;
        setFormData((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value,
        }))
    }

    const handleFileInputValue = (evento: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = evento.target;
        console.log(files)
            if (files && files.length > 0) {
                setFormData((dadosAnteriores) => ({
                    ...dadosAnteriores,
                    [name]: files[0],
                }))
            }
    }

    const handleOnChangeTechs = (technologyId: number) => {
        setFormData((dadosAnteriores) => {
            const tecnologias = dadosAnteriores.tecnologias.includes(technologyId)
                ? dadosAnteriores.tecnologias.filter((id) => id !== technologyId)
                : [...dadosAnteriores.tecnologias, technologyId]

            return {
                ...dadosAnteriores,
                tecnologias
            }
        })
    }

    async function handleProjectStatus(projectId: number) {
        try {
            const response = await updateStatusProject(projectId)
            console.log(response)

            if (!response) {
                return
            }

            const novoStatusAtivo = response.ativo

            setFormData((dadosAnteriores) => ({
                ...dadosAnteriores,
                ativo: String(novoStatusAtivo)
            }))

            setProjectStatus(novoStatusAtivo)
            await loadActiveProjects()
            showSuccessToast("Status do projeto atualizado com sucesso!")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }

    const handleOptionInput = async (evento: ChangeEvent<HTMLInputElement>) => {
        const projectName = evento.target.value
        setSelectedProject(projectName);

        try {
            const selectedProjectData = await findProjectByName(projectName)
            if (!selectedProjectData) return

            setProjectId(selectedProjectData.id)

            const projectTechnologyIds = selectedProjectData.tecnologias.map((tecnologia) => tecnologia.tecnologia_id)

            setFormData({
                nome: selectedProjectData.nome,
                descricao: selectedProjectData.descricao,
                ativo: String(selectedProjectData.ativo),
                videoSrc: null,
                imagemSrc: null,
                deployUrl: selectedProjectData.deployUrl,
                githubUrl: selectedProjectData.githubUrl,
                tecnologias: projectTechnologyIds
            })
            
            setProjectStatus(selectedProjectData.ativo)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }

    async function handleSubmitFormToPatchOrPostProject(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            if(selectedProject) {
                await updateProject(formData, projectId)
                showSuccessToast("Projeto atualizado com sucesso!")
            } else {
                showSuccessToast("Projeto criado com sucesso!")
                await createProject(formData)
            }
            await loadAllProjects()
            await loadActiveProjects()
        } catch (error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }

    async function handleDeleteProject(id: number) {
        try {
            await deleteProject(id)
            await loadAllProjects()
            await loadActiveProjects()
            showSuccessToast("Projeto deletado com sucesso!")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }

    return (
        <>
        <div className={displayProjectForm? "projectForm fixed":"projectForm dispNone"}>
            <span className="closeSpanBlack" onClick={() => setDisplayProjectForm(false)} >X</span>
            <h2>Projetos</h2>
            <form onSubmit={handleSubmitFormToPatchOrPostProject}>
                <input type="hidden" name="id" value={projectId} />
                <input type="text" list="project-list" id="projetoChoiced" name="projetoChoiced" value={selectedProject} placeholder="Escreva ou escolha um projeto..." onChange={handleOptionInput} disabled={loading}/>
                <datalist id="project-list">
                {projects.map((project) => (
                    <option 
                    key={project.id} 
                    value={project.nome} 
                    label={`Id do Projeto: ${project.id}`} 
                    />
                ))}
                </datalist>
                <input type="text" name="nome" id="nome" placeholder="Nome" value={formData.nome} onChange={handleTextInputValue}/>
                <textarea name="descricao" id="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleTextInputValue}></textarea>
                <input type="text" name="githubUrl" id="githubUrl" placeholder="Repositório" value={formData.githubUrl} onChange={handleTextInputValue}/>
                <input type="text" name="deployUrl" id="deployUrl" placeholder="Site" value={formData.deployUrl} onChange={handleTextInputValue}/>
                <div className="active_button">
                    <label htmlFor="ativo">
                        Ativo
                    </label>
                        <input type="radio" name="ativo" value="false" onChange={handleRadioInput}/> 
                    <label htmlFor="ativo">Desativado
                    </label>
                        <input type="radio" name="ativo" value="true" onChange={handleRadioInput}/> 
                </div>
                <label htmlFor="imagem">Imagem</label>
                <input type="file" name="imagemSrc" id="imagemSrc" onChange={handleFileInputValue}/>
                <label htmlFor="video">Vídeo</label>
                <input type="file" name="videoSrc" id="videoSrc" onChange={handleFileInputValue}/>
                <button type="submit">Salvar</button>
                {selectedProject && (
                    <>
                        <button type="button" onClick={() => handleProjectStatus(projectId)}>{projectStatus ? (<p>Desativar</p>) : (<p>Ativar</p>)}</button>
                        <button type="button" onClick={() => handleDeleteProject(projectId)}>Deletar</button>
                    </>
                )}
            </form>
        </div>
        </>
    )
}

export default ProjectForm
