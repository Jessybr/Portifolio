import { useState, type ChangeEvent } from "react"
import SkillSpan from "../main/component/skillSpan"
import axios from "axios"
import { handleApiError, showSuccessToast } from "../../utils/toast"
import useSkills from "../../utils/useSkills"
import type { SoftSkillRequest } from "../../types/softSkill"
import type { TechnologyRequest } from "../../types/technology"

interface SkillFormProps {
    displaySkillForm: boolean
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
    loadSkillList: () => Promise<void>
}

function SkillForm({ displaySkillForm, setDisplaySkillForm, loadSkillList }: SkillFormProps) {
    const [dataSkill, setDataSkill] = useState<SoftSkillRequest>({
        nome: ''
    })
    const [dataTech, setDataTech] = useState<TechnologyRequest>({
        nome: ''
    })
    const {softSkills, technologies, loading, addSoftSkill, addTechnology, deleteSkill} = useSkills()

    const handleTextInputDataSkill = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = evento.target;
        setDataSkill((dadosAnteriores) => ({
            ...dadosAnteriores,
            nome: value,
        }))
    }

    const handleTextInputDataTech = (evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = evento.target;
        setDataTech((dadosAnteriores) => ({
            ...dadosAnteriores,
            nome: value,
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
                    (softSkills.map(skill => 
                            (
                                <SkillSpan 
                                id={skill.id}
                                skillName={skill.nome}
                                deleteSkill={deleteSkill}
                                type="softSkill"
                                loadSkillList={loadSkillList}/>
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
                    (technologies.map(skill => 
                            (
                                <SkillSpan 
                                id={skill.id}
                                skillName={skill.nome}
                                deleteSkill={deleteSkill}
                                type="technology"
                                loadSkillList={loadSkillList}/>
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