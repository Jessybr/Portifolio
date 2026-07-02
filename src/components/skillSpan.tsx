interface SkillSpan {
    skillName: string
}

function SkillSpan({ skillName }: SkillSpan) {
    return (
        <div className="skillSpan">
            <p>{skillName}</p>
            <span>X</span>
        </div>
    )
}

export default SkillSpan