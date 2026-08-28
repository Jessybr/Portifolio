import axios from "axios"
import { useEffect, useState, type ChangeEvent } from "react"
import { handleApiError, showErrorToast, showSuccessToast } from "../../utils/toast"
import type { PerfilData, PerfilRequest } from "../../types/perfil"
import { validateFile } from "../../utils/fileValidation"
import { FILE_RULES } from "../../utils/fileRules"

interface PerfilFormProps {
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
    perfil: PerfilData | undefined
    updatePerfil: (dataForm: PerfilRequest) => Promise<void> 
}

function PerfilForm({ displayPerfilForm, setDisplayPerfilForm, perfil, loading, updatePerfil }: PerfilFormProps) {
    const [formData, setFormData] = useState<PerfilRequest>({
        nomeCompleto: perfil?.nomeCompleto ?? '',
        email: perfil?.email ?? '',
        celular: perfil?.celular ?? '',
        linkedinUrl: perfil?.linkedinUrl ?? '',
        githubUrl: perfil?.githubUrl ?? '',
        pdf: null,
        imagem: null,
        breveDescricao: perfil?.breveDescricao ?? '',
        sobreMim: perfil?.sobreMim ?? '',
    })

    useEffect(() => {
        setFormData({
            nomeCompleto: perfil?.nomeCompleto ?? '',
            email: perfil?.email ?? '',
            celular: perfil?.celular ?? '',
            linkedinUrl: perfil?.linkedinUrl ?? '',
            githubUrl: perfil?.githubUrl ?? '',
            pdf: null,
            imagem: null,
            breveDescricao: perfil?.breveDescricao ?? '',
            sobreMim: perfil?.sobreMim ?? '',
        })
    }, [perfil])

    const handleTextInput = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evento.target;
        setFormData((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value,
        }))
    }

    const handleFileInput = (evento: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = evento.target

        if (!files || files.length === 0) {
            return
        }

        const file = files[0]

        let error
        if(name === 'imagem') {
            error = validateFile(file, FILE_RULES.image)
        }
        if(name === 'pdf') {
            error = validateFile(file, FILE_RULES.pdf)
        }

        if (error) {
            showErrorToast(error)
            evento.target.value = ''
            return
        }

        setFormData((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: file,
        }))
    }

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await updatePerfil(formData)
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
