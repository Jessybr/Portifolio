import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import SkillForm from "../forms/skillForm"
import useSkills from "../../utils/useSkills"

interface SkillListProps {
    displaySkillForm: boolean
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn:boolean
}

function SkillsList({ displaySkillForm, setDisplaySkillForm, loginIn }: SkillListProps) {
    const [mostrarSoft, setMostrarSoft] = useState(false)
    const [mostrarHard, setMostrarHard] = useState(false)
    const [alturaAuto, setAlturaAuto] = useState(false)
    const {softSkills, technologies, loading, loadSkills} = useSkills()

    useEffect(() => {
        function handleScroll() {
            const scroll = window.scrollY

            if (scroll > 200) {
            setMostrarSoft(true)
            }

            if (scroll > 450) {
            setMostrarHard(true)
            setAlturaAuto(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        }, [])

    return (
        <>
        <SkillForm 
            displaySkillForm={displaySkillForm}
            setDisplaySkillForm={setDisplaySkillForm}
            loadSkillList={loadSkills}/>
        <div className={alturaAuto ? 'cont_skills heiAuto' : 'cont_skills'} id="skills">
            <FontAwesomeIcon icon={faPenToSquare}  className={loginIn? "faPenToSquareSkill":"faPenToSquareSkill dispNone"} onClick={() => setDisplaySkillForm(true)}/>
            <div className="topic_title">
                <h3 id="habili">Habilidades</h3>
            </div>
            <div className={mostrarSoft ? 'soft aparecerSkill' : 'soft'}>
                <h3>Soft Skills</h3>
                <ul>
                    {loading ?
                    (<p>Carregando projetos...</p>) : 
                    (softSkills.map(skill => 
                            (
                                <li key={skill.id}>
                                    {skill.nome}
                                </li>
                            )
                        )
                    )}
                </ul>
            </div>
            <div className={mostrarHard ? 'hard aparecerSkill' : 'hard'}>
                <h3>Hard Skills</h3>
                <ul>
                    {loading ? 
                    (<p>Carregando projetos...</p>) :
                    (technologies.map(skill => 
                            (
                                <li key={skill.id}>
                                    {skill.nome}
                                </li>
                            )
                        )
                    )}
                </ul>
            </div>
        </div>
        </>
    )
}

export default SkillsList