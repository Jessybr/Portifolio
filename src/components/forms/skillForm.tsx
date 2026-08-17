import { useEffect, useState, type ChangeEvent } from "react"
import SkillSpan from "../main/component/skillSpan"
import axios from "axios"
import { handleApiError, showSuccessToast } from "../../utils/toast"
import useSkills from "../../utils/useSkills"

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
        nome: ''
    })
    const [dataTech, setDataTech] = useState({
        nome: ''
    })
    const {softSkills, technologies, loading, loadSkills, addSoftSkill, addTechnology, deleteSkill} = useSkills()

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
            await addSoftSkill(dataSkill)
            loadSkillList()
            showSuccessToast("Tecnologia adicionada com sucesso!")
        } catch(error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }

    async function handleSubmitTech(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            await addTechnology(dataTech)
            loadSkillList()
            showSuccessToast("Tecnologia adicionada com sucesso!")
        } catch(error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
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