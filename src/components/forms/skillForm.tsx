import SkillSpan from "../main/component/skillSpan"

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