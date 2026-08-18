import { useEffect, useState } from "react"
import { getPerfil } from "../api/perfilApi"

interface PerfilData {
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

interface PerfilRequest {
    nomeCompleto: string
    email: string
    celular: string
    linkedinUrl: string
    githubUrl: string
    pdf: null
    imagem: null
    breveDescricao: string
    sobreMim: string
}

function usePerfil() {
    const [perfil, setPerfil] = useState<PerfilData | null>(null)
    const [loading, setLoading] = useState(true)

    async function loadPerfil() {
        const response = await getPerfil()
        setPerfil(response.data.data.perfil)
        setLoading(false)
    }

    useEffect(() => {
        loadPerfil()
    })

    return {
        loading, 
        perfil,
        loadPerfil
    }

}

export default usePerfil