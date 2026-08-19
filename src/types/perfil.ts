export interface PerfilData {
    id?: number
    nomeCompleto?: string
    email?: string
    celular?: string
    linkedinUrl?: string
    githubUrl?: string
    curriculoSrc?: string
    fotoSrc?: string
    breveDescricao?: string
    sobreMim?: string
}

export interface PerfilRequest {
    nomeCompleto: string
    email: string
    celular: string
    linkedinUrl: string
    githubUrl: string
    pdf: File | null
    imagem: File | null
    breveDescricao: string
    sobreMim: string
}