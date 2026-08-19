import { useEffect, useState } from "react"
import { getSoftSkill } from "../api/softSkillApi"
import { getTechnology } from "../api/technologyApi"
import { deleteSoftSkill, postSoftSkill } from "../api/admin/softSkillAdminApi"
import { deleteTechnology, postTechnology } from "../api/admin/technologyAdminApi"
import type { SoftSkillData, SoftSkillRequest } from "../types/softSkill"

interface TechnologyData {
    id: number
    nome: string
}

interface TechnologyDataRequest {
    nome: string
}

function useSkills() {
    const [softSkills, setSoftSkills] = useState<SoftSkillData[]>([])
    const [technologies, setTechnologies] = useState<TechnologyData[]>([])
    const [loading, setLoading] = useState(true)

    async function loadSkills() {
        try {
            const responseSoftSkill = await getSoftSkill()
            setSoftSkills(responseSoftSkill.data.softSkills)

            const responseTechnology = await getTechnology()
            setTechnologies(responseTechnology.data.technologies)

        } catch (error) {
            console.error("Erro ao carregar skills", error)
        } finally {
            setLoading(false)
        }
    }

    async function addSoftSkill(data: SoftSkillRequest) {
        await postSoftSkill(data)
        await loadSkills()
    }

    async function addTechnology(data: TechnologyDataRequest) {
        await postTechnology(data)
        await loadSkills()
    }

    async function deleteSkill(type: string, id: number){
        if(type==="softSkill") {
            await deleteSoftSkill(id)
        } else {
            if(type==="technology") {
                await deleteTechnology(id)
            }
        }
        await loadSkills()
    }

    useEffect(() => {
        loadSkills()
    }, [])

    return {
        softSkills,
        technologies,
        loading,
        loadSkills,
        addSoftSkill,
        addTechnology,
        deleteSkill
    }
}

export default useSkills