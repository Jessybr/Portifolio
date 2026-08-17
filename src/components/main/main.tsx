import Perfil from "../perfil"
import AboutMe from "./aboutMe"
import Contact from "./contact"
import Projects from "./projectList"
import SkillsList from "./skillsList"

interface MainProps {
    displaySkillForm: boolean
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
    displayProjectForm: boolean
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn: boolean
    setLoginIn: React.Dispatch<React.SetStateAction<boolean>>
    displayFormLogin: boolean
    setDisplayFormLogin: React.Dispatch<React.SetStateAction<boolean>>
    displayPerfilForm: boolean
    setDisplayPerfilForm: React.Dispatch<React.SetStateAction<boolean>>
}

function Main({ displaySkillForm, setDisplaySkillForm, setDisplayProjectForm, loginIn, setLoginIn, displayProjectForm, displayFormLogin, setDisplayFormLogin, displayPerfilForm, setDisplayPerfilForm }: MainProps) {
    return (
        <main>
            <Perfil 
                displayFormLogin={displayFormLogin}
                setDisplayFormLogin={setDisplayFormLogin}
                displayPerfilForm={displayPerfilForm}
                setDisplayPerfilForm={setDisplayPerfilForm}
                loginIn={loginIn}
                setLoginIn={setLoginIn}/>
            <SkillsList
                displaySkillForm={displaySkillForm}
                setDisplaySkillForm={setDisplaySkillForm}
                loginIn={loginIn}/>
            <Projects 
                setDisplayProjectForm={setDisplayProjectForm}
                loginIn={loginIn}
                displayProjectForm={displayProjectForm}/>
            <AboutMe />
            <Contact />
        </main>
    )
}

export default Main