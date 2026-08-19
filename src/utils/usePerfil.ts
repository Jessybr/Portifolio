import { useEffect, useState } from "react"
import { getPerfil } from "../api/perfilApi"
import { patchPerfil } from "../api/admin/perfilAdminApi"
import type { PerfilData, PerfilRequest } from "../types/perfil"

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