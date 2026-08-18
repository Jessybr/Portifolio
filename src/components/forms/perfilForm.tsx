import axios from "axios"
import { patchPerfil } from "../../api/admin/perfilAdminApi"
import { useEffect, useState, type ChangeEvent } from "react"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { getPerfil } from "../../api/perfilApi"
import { handleApiError, showSuccessToast } from "../../utils/toast"

interface PerfilFormProps {
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
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

        pdf: null,
        imagem: null,
        breveDescricao: '',
        sobreMim: '',
    });
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadPerfil() {
            try {
                const response = await getPerfil()
                setFormData(response.data.data.perfil)
            } catch(error) {
                console.error("Erro ao carregar projetos", error)
            } finally {
                setLoading(false)
            }
        }

        loadPerfil()
    }, [])

    const handleTextInput = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evento.target;
        setFormData((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value,
        }));
    };

    const handleFileInput = (evento: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = evento.target;
            if (files && files.length > 0) {
                setFormData((dadosAnteriores) => ({
                    ...dadosAnteriores,
                    [name]: files[0],
            }));
        }
    }

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

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

        try {
            const response = await patchPerfil(data)
            loadPerfil()
            showSuccessToast("Perfil editado com sucesso!")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }
    return (
        <>
        {loading? (<p>Aguardando informações...</p>) : (
            <>
            <div className={displayPerfilForm? "perfilForm fixed" : "perfilForm dispNone"}>
                <form onSubmit={handleSubmit}>
                    <span className="closeSpanBlack" onClick={() => setDisplayPerfilForm(false)}>X</span>
                    <h2>Editar Perfil</h2>
                    <input type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Nome Completo" value={formData.nomeCompleto} onChange={handleTextInput}/>
                    <textarea name="breveDescricao" id="breveDescricao" placeholder="Breve descrição" value={formData.breveDescricao} onChange={handleTextInput}></textarea>
                    <textarea name="sobreMim" id="sobreMim" placeholder="Sobre mim" value={formData.sobreMim} onChange={handleTextInput}></textarea>
                    <input type="text" name="githubUrl" id="githubUrl" placeholder="Github" value={formData.githubUrl} onChange={handleTextInput}/>
                    <input type="text" name="linkedinUrl" id="linkedinUrl" placeholder="Linkedin" value={formData.linkedinUrl} onChange={handleTextInput}/>
                    <input type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleTextInput}/>
                    <input type="text" name="celular" id="celular" placeholder="Celular" value={formData.celular} onChange={handleTextInput}/>
                    <label htmlFor="pdf">Currículo</label>
                    <input type="file" name="pdf" id="pdf" placeholder="Currículo" onChange={handleFileInput}/>
                    <label htmlFor="imagem">Foto</label>
                    <input type="file" name="imagem" id="imagem" placeholder="imagem" onChange={handleFileInput}/>
                    <button type="submit">Salvar</button>
                </form>
            </div>
            </>
        )}
        </>
    )
}

export default PerfilForm
