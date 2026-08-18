import { useEffect, useState } from "react"
import { getPerfil } from "../api/perfilApi"
import { patchPerfil } from "../api/admin/perfilAdminApi"

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
    const [perfil, setPerfil] = useState<PerfilData>()
    const [loading, setLoading] = useState(true)

    async function loadPerfil() {
        const response = await getPerfil()
        setPerfil(response.data.data.perfil)
        setLoading(false)
    }

    async function updatePerfil(formData: PerfilRequest) {
        const data = new FormData()
        data.append('nomeCompleto', formData.nomeCompleto)
        data.append('email', formData.email)
        data.append('celular', formData.celular)
        data.append('linkedinUrl', formData.linkedinUrl)
        data.append('githubUrl', formData.githubUrl)
        data.append('breveDescricao', formData.breveDescricao)
        data.append('sobreMim', formData.sobreMim)

        if (formData.pdf) {
            data.append('pdf', formData.pdf);
        }
        if (formData.imagem) {
            data.append('imagem', formData.imagem);
        }

        await patchPerfil(data)
        loadPerfil()
    }

    useEffect(() => {
        loadPerfil()
    })

    return {
        loading, 
        perfil,
        loadPerfil,
        updatePerfil
    }

}

export default usePerfil