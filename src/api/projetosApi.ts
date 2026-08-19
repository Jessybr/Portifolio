import api from "./api";

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

export async function getActiveProjects() {
    const response = await api.get("/project/active")
    return response
}

export async function getProjectById(id: number): Promise<ProjectData> {
    const response = await api.get(`/project/${id}`)
    return response.data.data.project
}

export async function getProjectByName(name: string): Promise<ProjectData> {
    const response = await api.get(`/project/${name}`)
    return response.data.data.project
}