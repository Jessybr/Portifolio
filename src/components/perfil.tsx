import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { getPerfil } from '../api/perfilApi';
import { useEffect, useState } from 'react';

interface PerfilProps {
    setDisplayFormLogin: React.Dispatch<React.SetStateAction<boolean>>
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn: boolean,
    perfil: PerfilData | null
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

function Perfil({ setDisplayFormLogin, setDisplayPerfilForm, loginIn, perfil, setPerfil }: PerfilProps) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadPerfil() {
            try {
                const response = await getPerfil()
                setPerfil(response.data.data.perfil)
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
        <header>
            <div className="cont_inicio">
                <FontAwesomeIcon icon={faPenToSquare} className={loginIn? "faPenToSquare":"faPenToSquare dispNone"} onClick={() => setDisplayPerfilForm(true)}/>
                <div className="cont_header">
                    <div className="cont_img">
                        <img src={perfil?.fotoSrc} alt="Jéssica Bueno Ramos" />
                    </div>
                    <div className="cont_title">
                        <h2>Olá, eu sou a </h2>
                        <h1 onClick={() => setDisplayFormLogin(true) }>{perfil?.nomeCompleto}</h1>
                        <h4>{perfil?.breveDescricao}</h4>
                        {/* <button><a href={perfil?.curriculoSrc} download="Curriculo-Jessica-Bueno-Ramos.pdf" target="_blank">Currículo</a></button> */}
                        <a href={perfil?.githubUrl} target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                        </a>
                        <a href={perfil?.linkedinUrl} target="_blank">
                            <FontAwesomeIcon icon={faSquareLinkedin} size="xl" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Perfil
