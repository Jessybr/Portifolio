export interface ProjectData {
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

export interface ProjectRequest {
    nome: string
    descricao: string
    ativo: string
    videoSrc: File | null
    imagemSrc: File | null
    deployUrl: string
    githubUrl: string
    tecnologias: number[]
}