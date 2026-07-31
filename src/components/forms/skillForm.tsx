import { useEffect, useState, type ChangeEvent } from "react"
import SkillSpan from "../main/component/skillSpan"
import { getSoftSkill } from "../../api/softSkillApi"
import { getTechnology } from "../../api/technologyApi"
import { postSoftSkill } from "../../api/admin/softSkillAdminApi"
import { postTechnology } from "../../api/admin/technologyAdminApi"

interface SkillFormProps {
    displaySkillForm: boolean
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
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

function SkillForm({ displaySkillForm, setDisplaySkillForm }: SkillFormProps) {
    const [softSkill, setSoftSkill] = useState<SoftSkillData[]>([])
    const [technology, setTechnology] = useState<TechnologyData[]>([])
    const [dataSkill, setDataSkill] = useState({
        nome: '',
        iconeSrc: ''
    })
    const [dataTech, setDataTech] = useState({
        nome: '',
        iconeSrc: ''
    })
    const [loading, setLoading] = useState(true)

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

    useEffect(() => {
        loadSkills()
    }, [])

    const handleTextInputDataSkill = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evento.target;
        setDataSkill((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value,
        }))
    }

    const handleTextInputDataTech = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evento.target;
        setDataTech((dadosAnteriores) => ({
            ...dadosAnteriores,
            [name]: value,
        }))
    }

    async function handleSubmitSoftSkill(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const result = await postSoftSkill(dataSkill)
            loadSkills()
            console.error(result)
        } catch(error) {
            console.error("Erro", error)
        }
    }

    async function handleSubmitTech(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const result = await postTechnology(dataTech)
            loadSkills()
            console.error(result)
        } catch(error) {
            console.error("Erro", error)
        }
    }

    return (
        <>
        <div className={displaySkillForm? "skillForm fixed":"skillForm dispNone"}>
            <span className="closeSpanBlack" onClick={() => setDisplaySkillForm(false)} >X</span>
            <div>
                <h2>Soft Skills</h2>
                <form onSubmit={handleSubmitSoftSkill}>
                    <input type="text" placeholder="Skill" name="nome" value={dataSkill.nome} onChange={handleTextInputDataSkill}/>
                    <input type="text" placeholder="Ícone" name="iconeSrc" value={dataSkill.iconeSrc} onChange={handleTextInputDataSkill}/>
                    <button type="submit">Adicionar</button>
                </form>
                <div className="skill_cont">
                    {loading ?
                    (<p>Carregando projetos...</p>) : 
                    (softSkill.map(skill => 
                            (
                                <SkillSpan 
                                id={skill.id}
                                skillName={skill.nome}
                                iconSrc={skill.iconeSrc}
                                loadSkills={loadSkills}
                                type="softSkill"/>
                            )
                        )
                    )}
                </div>
            </div>
            <div>
                <h2>Hard Skills</h2>
                <form onSubmit={handleSubmitTech}>
                    <input type="text" placeholder="Tecnologia" name="nome" value={dataTech.nome} onChange={handleTextInputDataTech}/>
                    <input type="text" placeholder="Ícone" name="iconeSrc" value={dataTech.iconeSrc} onChange={handleTextInputDataTech}/>
                    <button type="submit">Adicionar</button>
                </form>
                <div className="skill_cont">
                    {loading ?
                    (<p>Carregando projetos...</p>) : 
                    (technology.map(skill => 
                            (
                                <SkillSpan 
                                id={skill.id}
                                skillName={skill.nome}
                                iconSrc={skill.iconeSrc}
                                loadSkills={loadSkills}
                                type="technology"/>
                            )
                        )
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default SkillForm