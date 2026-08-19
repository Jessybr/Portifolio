import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Project from './component/project'
import ProjectForm from '../forms/projectForm'
import useProject from '../../utils/useProject'

interface ProjectListProps {
    displayProjectForm: boolean
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn: boolean
}

function ProjectList({ setDisplayProjectForm, loginIn, displayProjectForm }: ProjectListProps) {
    const { allProjects, activeProjects, loading, loadAllProjects, loadActiveProjects, createProject, updateProject, deleteProject, findProjectByName, updateStatusProject } = useProject()

    return (
        <>
        
        <ProjectForm 
            displayProjectForm={displayProjectForm}
            setDisplayProjectForm={setDisplayProjectForm}
            allProjects={allProjects}
            loadAllProjects={loadAllProjects}
            loadActiveProjects={loadActiveProjects}
            createProject={createProject}
            updateProject={updateProject}
            deleteProject={deleteProject}
            findProjectByName={findProjectByName}
            updateStatusProject={updateStatusProject}
        />
        <div id="proje" className="cont_proj">
            <FontAwesomeIcon icon={faPenToSquare}  className={loginIn? "faPenToSquareProject":"faPenToSquareProject dispNone"} onClick={() => setDisplayProjectForm(true)}/>
                <h3 className="topic_title">Projetos</h3>
            <div className="projs">
                {loading ? (
                    <p>Carregando projetos...</p> 
                    ) : (
                    activeProjects.map(project => (
                        <Project key={project.id} project={project} />
                    ))
                )}
            </div>
        </div>
        </>
    )
}

export default ProjectList
