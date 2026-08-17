import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import PerfilForm from './forms/perfilForm';
import Login from './forms/login';
import usePerfil from '../utils/usePerfil';

interface PerfilProps {
    displayFormLogin: boolean
    setDisplayFormLogin: React.Dispatch<React.SetStateAction<boolean>>
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn: boolean
    setLoginIn: React.Dispatch<React.SetStateAction<boolean>>
}

function Perfil({ displayFormLogin, setDisplayFormLogin, displayPerfilForm, setDisplayPerfilForm, loginIn, setLoginIn }: PerfilProps) {
    const {perfil, loading, loadPerfil} = usePerfil()

    return (
        <>
        <Login 
            displayFormLogin={displayFormLogin}
            setDisplayFormLogin={setDisplayFormLogin}
            setLoginIn={setLoginIn}/>
        <PerfilForm 
            displayPerfilForm={displayPerfilForm}
            setDisplayPerfilForm={setDisplayPerfilForm}
            loadPerfil={loadPerfil}
        />
        <header>
            <div className="cont_inicio">
                {loading ?
                    (<p>Carregando perfil...</p>) : 
                    (<>
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
                    </>)
                }
            </div>
        </header>
        </>
    )
}

export default Perfil
