import axios from "axios"
import { patchPerfil } from "../../api/admin/perfilAdminApi"
import { useEffect, useState, type ChangeEvent } from "react"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { getPerfil } from "../../api/perfilApi"

interface PerfilFormProps {
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
    setPerfil: React.Dispatch<React.SetStateAction<PerfilData | null>>
}

interface PerfilData {
    id: number
    nomeCompleto: string
    linkedinUrl: string
    githubUrl: string
    curriculoSrc: string
    fotoSrc: string
    breveDescricao: string
}

function PerfilForm({ displayPerfilForm, setDisplayPerfilForm, setPerfil }: PerfilFormProps) {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        celular: '',
        linkedinUrl: '',
        githubUrl: '',
        pdf: null,
        imagem: null,
        breveDescricao: '',
        sobreMim: '',
    });
    const [statusMessage, setStatusMessage] = useState("")
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

    return (
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