import { useEffect, useState } from "react"
import { getPerfil } from "../api/perfilApi"

interface PerfilData {
    id: number
    nomeCompleto: string
    linkedinUrl: string
    githubUrl: string
    curriculoSrc: string
    fotoSrc: string
    breveDescricao: string
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