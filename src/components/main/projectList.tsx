import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Project from './component/project'

interface ProjectListProps {
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
}

function ProjectList({ setDisplayProjectForm }: ProjectListProps) {

    return (
        <>
        <div id="proje" className="cont_proj">
            <FontAwesomeIcon icon={faPenToSquare} className="faPenToSquareProject" onClick={() => setDisplayProjectForm(true)}/>
                <h3 className="topic_title">Projetos</h3>
            <div className="projs">
                <Project />
            </div>
        </div>
        </>
    )
}

export default ProjectList