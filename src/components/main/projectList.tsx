import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Project from './component/project'

interface ProjectListProps {
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn: boolean
}

interface ProjectData {
    id: number
    nome: string
    descricao: string
    ativo: boolean
    videoSrc: string
    videoPublicId: string
    imagemSrc: string
    imagemPublicId: string
    deployUrl: string
    githubUrl: string
    tecnologias: [
        {
            tecnologia_id: number
            projeto_id: number
            tecnologia: {
                id: number
                nome: string
                iconeSrc: string
            }
        }
    ],
}

function ProjectList({ setDisplayProjectForm, loginIn }: ProjectListProps) {

    return (
        <>
        <div id="proje" className="cont_proj">
            <FontAwesomeIcon icon={faPenToSquare}  className={loginIn? "faPenToSquareProject":"faPenToSquareProject dispNone"} onClick={() => setDisplayProjectForm(true)}/>
                <h3 className="topic_title">Projetos</h3>
            <div className="projs">
                <Project />
            </div>
        </div>
        </>
    )
}

export default ProjectList