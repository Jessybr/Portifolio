import AboutMe from "./aboutMe"
import Contact from "./contact"
import Projects from "./projectList"
import SkillsList from "./skillsList"

interface MainProps {
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
    setDisplayProjectForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn: boolean
}

function Main({ setDisplaySkillForm, setDisplayProjectForm, loginIn }: MainProps) {
    return (
        <main>
            <SkillsList
                setDisplaySkillForm={setDisplaySkillForm}
                loginIn={loginIn}/>
            <Projects 
                setDisplayProjectForm={setDisplayProjectForm}
                loginIn={loginIn}/>
            <AboutMe />
            <Contact />
        </main>
    )
}

export default Main