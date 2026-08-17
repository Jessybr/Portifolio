import axios from "axios"
import { handleApiError, showSuccessToast } from "../../../utils/toast"

interface SkillSpanProps {
    id: number
    skillName: string
    deleteSkill: (type: string, id: number) => Promise<void>
    type: string
    loadSkillList: () => Promise<void>
}

function SkillSpan({ id, skillName, deleteSkill, type, loadSkillList }: SkillSpanProps) {
    const handleDeleteSkill = async () => {
        try{
            if(type==="softSkill") {
                await deleteSkill(type,id)
                showSuccessToast("Soft Skill deletada com sucesso!")
            } else {
                if(type==="technology") {
                    await deleteSkill(type,id)
                    showSuccessToast("Tecnologia deletada com sucesso!")
                }
            }
            loadSkillList()
        } catch(error) {
            if (axios.isAxiosError(error)) {
                handleApiError(error.status)
            }
        }
    }

    return (
        <div className="skillSpan">
            <p>{skillName}</p>
            <span onClick={handleDeleteSkill}>X</span>
        </div>
    )
}

export default SkillSpan