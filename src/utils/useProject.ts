import { useEffect, useState } from "react"
import { getActiveProjects, getProjectById, getProjectByName } from "../api/projetosApi"
import { deleteProjectById, getAllProjects, patchProjectById, postProject, updateProjectStatusById } from "../api/admin/projectAdminApi"

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
    tecnologias: [
        {
            tecnologia_id: number
            projeto_id: number
            tecnologia: {
                id: number
                nome: string
                iconeSrc: string
            }
        }
    ],
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

function useProject() {
    const [allProjects, setAllProjects] = useState<ProjectData[]>([])
    const [activeProjects, setActiveProjects] = useState<ProjectData[]>([])
    const [loading, setLoading] = useState(true)

    async function loadAllProjects() {
        const response = await getAllProjects()
        setAllProjects(response.data.data)
        setLoading(false)
    }

    async function loadActiveProjects() {
        const response = await getActiveProjects()
        setActiveProjects(response.data.data.projects)
    }

    async function findProjectById(id: number) {
        const response = await getProjectById(id)
        return response
    }

    async function findProjectByName(name: string) {
        const response = await getProjectByName(name)
        return response
    }

    async function createProject(formData: ProjectRequest) {
        const data = new FormData()
        data.append('nome', formData.nome)
        data.append('descricao', formData.descricao)
        data.append('deployUrl', formData.deployUrl)
        data.append('githubUrl', formData.githubUrl)

        if (formData.ativo) {
            data.append('ativo', formData.ativo)
        }
        if (formData.videoSrc) {
            data.append('video', formData.videoSrc)
        }
        if (formData.imagemSrc) {
            data.append('imagem', formData.imagemSrc)
        }
        data.append('tecnologias', JSON.stringify(formData.tecnologias))

        await postProject(data)

    }

    async function updateProject(formData: ProjectRequest, projectId: number) {
        const data = new FormData()
        data.append('nome', formData.nome)
        data.append('descricao', formData.descricao)
        data.append('deployUrl', formData.deployUrl)
        data.append('githubUrl', formData.githubUrl)

        if (formData.ativo) {
            data.append('ativo', formData.ativo)
        }
        if (formData.videoSrc) {
            data.append('video', formData.videoSrc)
        }
        if (formData.imagemSrc) {
            data.append('imagem', formData.imagemSrc)
        }
        data.append('tecnologias', JSON.stringify(formData.tecnologias))

        await patchProjectById(projectId, data)
    }

    async function updateStatusProject(projectId: number) {
        const response = await updateProjectStatusById(projectId)
        return response.data.project
    }

    async function deleteProject(projectId: number) {
        await deleteProjectById(projectId)
    }
    
    useEffect(() => {
        loadAllProjects()
        loadActiveProjects()
    }, [])

    return { 
        allProjects,
        activeProjects,
        loading, 
        loadAllProjects,
        loadActiveProjects,
        createProject,
        updateProject,
        deleteProject,
        findProjectById,
        findProjectByName,
        updateStatusProject
    }
}

export default useProject