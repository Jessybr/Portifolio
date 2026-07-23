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
            <form action="">
                <span className="closeSpanBlack" onClick={() => setDisplayPerfilForm(false)}>X</span>
                <h2>Editar Perfil</h2>
                <input type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Nome Completo"/>
                <textarea name="descricao" id="descricao" placeholder="Descrição"></textarea>
                <input type="text" name="githubURL" id="githubURL" placeholder="Github"/>
                <input type="text" name="linkedinURL" id="linkedinURL" placeholder="Linkedin"/>
                <input type="text" name="email" id="email" placeholder="Email"/>
                <input type="text" name="celular" id="celular" placeholder="Celular"/>
                <label htmlFor="curriculoSRC">Currículo</label>
                <input type="file" name="curriculoSRC" id="curriculoSRC" placeholder="Currículo"/>
                <label htmlFor="fotoSRC">Foto</label>
                <input type="file" name="fotoSRC" id="fotoSRC" placeholder="fotoSRC"/>
                <button type="submit">Salvar</button>
            </form>
        </div>
        </>
    )
}

export default PerfilForm