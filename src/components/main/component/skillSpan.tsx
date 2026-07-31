import { deleteSoftSkill } from "../../../api/admin/softSkillAdminApi"
import { deleteTechnology } from "../../../api/admin/technologyAdminApi"

interface SkillSpanProps {
    id: number
    skillName: string
    iconSrc: string
    loadSkills: () => void
    type: string
}

function SkillSpan({ id, skillName, iconSrc, loadSkills, type }: SkillSpanProps) {
    const deleteSkill = async () => {
        try{
            if(type==="softSkill") {
                const result = await deleteSoftSkill(id)
                loadSkills()
            } else {
                if(type==="technology") {
                    const result = await deleteTechnology(id)
                    loadSkills()
                }
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="skillSpan">
            <p>{skillName}</p>
            <span onClick={deleteSkill}>X</span>
        </div>
    )
}

export default SkillSpan