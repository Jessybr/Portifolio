import SkillSpan from "../main/skillSpan"

interface SkillFormProps {
    displaySkillForm: boolean
    setDisplaySkillForm: React.Dispatch<React.SetStateAction<boolean>>
}

function SkillForm({ displaySkillForm, setDisplaySkillForm }: SkillFormProps) {
    return (
        <>
        <div className={displaySkillForm? "skillForm fixed":"skillForm dispNone"}>
            <span className="closeSpanBlack" onClick={() => setDisplaySkillForm(false)} >X</span>
            <div>
                <h2>Soft Skills</h2>
                <form>
                    <input type="text" />
                    <button type="submit">Adicionar</button>
                </form>
                <div className="skill_cont">
                    <SkillSpan 
                    skillName="Comunicação"/>
                </div>
            </div>
            <div>
                <h2>Hard Skills</h2>
                <form>
                    <input type="text" />
                    <button type="submit">Adicionar</button>
                </form>
                <div className="skill_cont">
                    <SkillSpan 
                    skillName="Java"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SkillForm