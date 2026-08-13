import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { getSoftSkill } from "../../api/softSkillApi"
import { getTechnology } from "../../api/technologyApi"

interface SkillListProps {
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
    loginIn:boolean
}

interface TechnologyData {
    id: number
    nome: string
    iconeSrc: string
}

interface SoftSkillData {
    id: number
    nome: string
    iconeSrc: string
}

function SkillsList({ setDisplaySkillForm, loginIn }: SkillListProps) {
    const [softSkill, setSoftSkill] = useState<SoftSkillData[]>([])
    const [technology, setTechnology] = useState<TechnologyData[]>([])
    const [loading, setLoading] = useState(true)
    const [mostrarSoft, setMostrarSoft] = useState(false)
    const [mostrarHard, setMostrarHard] = useState(false)
    const [alturaAuto, setAlturaAuto] = useState(false)

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
    
    useEffect(() => {
        async function loadSkills() {
            try {
                const responseSoftSkill = await getSoftSkill()
                setSoftSkill(responseSoftSkill.data.softSkills)

                const responseTechnology = await getTechnology()
                setTechnology(responseTechnology.data.technologies)
            } catch(error) {
                console.error("Erro ao carregar projetos", error)
            } finally {
                setLoading(false)
            }
        }

        loadSkills()
    }, [])

    return (
        <>
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
                    (softSkill.map(skill => 
                            (
                                <li>
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
                    (softSkill && technology.map(skill => 
                            (
                                <li>
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