import AboutMe from "./aboutMe"
import Contact from "./contact"
import Projects from "./projects"
import SkillsList from "./skillsList"

interface MainProps {
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
}

function Main({ setDisplaySkillForm }: MainProps) {
    return (
        <main>
            <SkillsList
             setDisplaySkillForm={setDisplaySkillForm}/>
            <Projects />
            <AboutMe />
            <Contact />
        </main>
    )
}

export default Main