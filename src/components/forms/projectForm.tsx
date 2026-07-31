interface ProjectFormProps {
    displayProjectForm: boolean
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
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

interface ProjectFormData {
    nome: string
    descricao: string
    ativo: string
    videoSrc: File | null
    imagemSrc: File | null
    deployUrl: string
    githubUrl: string
    tecnologias: ProjectData["tecnologias"]
}

function ProjectForm({ displayProjectForm, setDisplayProjectForm }: ProjectFormProps) {
    const [projects, setProjects] = useState<ProjectData[]>([])
    const [projectId, setProjectId] = useState(0)
    const [loading, setLoading] = useState(true)
    const [selectedProject, setSelectedProject] = useState<string>('');
    const [formData, setFormData] = useState<ProjectFormData>({
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

            
            console.log(formData.imagemSrc)
        }
    }
    
    const handleRadioInput = (evento: ChangeEvent<HTMLInputElement>) => {
        setFormData((dadosAnteriores) => ({
            ...dadosAnteriores,
            ativo: evento?.target.value,
        }))
    }

    const handleOptionInput = async (evento: ChangeEvent<HTMLInputElement>) => {
        const projectName = evento.target.value
        setSelectedProject(projectName);

        const projetoEncontrado = projects.find(
            (project) => project.nome.toLowerCase() === projectName.toLowerCase()
        );

        if (!projetoEncontrado) {
            return
        }

        try {
            const project = await getProjectById(projetoEncontrado.id)
            setProjectId(project.id)

            setFormData({
                nome: project?.nome ?? '',
                descricao: project?.descricao ?? '',
                ativo: project?.ativo !== undefined ? String(project.ativo) : '',
                videoSrc: null,
                imagemSrc: null,
                deployUrl: project?.deployUrl ?? '',
                githubUrl: project?.githubUrl ?? '',
                tecnologias: project?.tecnologias ?? []
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <div className={displayProjectForm? "projectForm fixed":"projectForm dispNone"}>
            <span className="closeSpanBlack" onClick={() => setDisplayProjectForm(false)} >X</span>
            <h2>Projetos</h2>
            <form action="">
                <input list="projeto" id="projetoEscolhido" name="projetoEscolhido" placeholder="Escolha o Projeto"/>
                <datalist id="projeto">
                    <option value="Novo Projeto"/>
                    <option value="Amor na Casquinha"/>
                    <option value="Spotfy"/>
                    <option value="API - Porfólio"/>
                    <option value="Biblioteca"/>
                </datalist>
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <textarea name="descricao" id="descricao" placeholder="Descrição"></textarea>
                <input type="text" name="githubURL" id="githubURL" placeholder="Repositório"/>
                <input type="text" name="deployURL" id="deployURL" placeholder="Site"/>
                <div className="active_button">
                    <label htmlFor="ativo">
                        Ativo
                    </label>
                        <input type="radio" name="ativo" value="ativo"/> 
                    <label htmlFor="ativo">Desativado
                    </label>
                        <input type="radio" name="ativo" value="desativado"/> 
                </div>
                <label htmlFor="imagem">Imagem</label>
                <input type="file" name="imagem" id="imagem"/>
                <label htmlFor="video">Vídeo</label>
                <input type="file" name="video" id="video"/>
                <button type="submit">Salvar</button>
            </form>
        </div>
        </>
    )
}

export default ProjectForm