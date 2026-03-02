import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', {
    state: () => ({
        skills_data: []
    }),
    getters: {
        skills_buttons: (state) => {
            const groups = new Set()
            state.skills_data.forEach(skill => {
                if (skill.group) {
                    skill.group.forEach(g => groups.add(g))
                }
            })
            return [{ name: "All" }, ...Array.from(groups).map(g => ({ name: g }))]
        }
    },
    actions: {
        connect() {
            this.skills_data = [
                { name: "Python", group: ["Machine Learning", "Full-stack", "3D/VFX", "Programming Languages"] },
                { name: "Java", group: ["Full-stack", "Programming Languages"] },
                { name: "C++", group: ["3D/VFX", "Programming Languages"] },
                { name: "Javascript", group: ["Full-stack", "Programming Languages"] },
                { name: "Pascal", group: ["Programming Languages"] },
                { name: "React", group: ["Full-stack"] },
                { name: "React hooks", group: ["Full-stack"] },
                { name: "Turbo", group: ["Full-stack"] },
                { name: "Stimulus", group: ["Full-stack"] },
                { name: "Vue", group: ["Full-stack"] },
                { name: "Tailwind", group: ["Full-stack"] },
                { name: "Tornado", group: ["Full-stack"] },
                { name: "CSS", group: ["Full-stack"] },
                { name: "HTML", group: ["Full-stack"] },
                { name: "NodeJS", group: ["Full-stack"] },
                { name: "Flask", group: ["Full-stack"] },
                { name: "Blender", group: ["3D/VFX"] },
                { name: "Photoshop", group: ["3D/VFX"] },
                { name: "After Effects", group: ["3D/VFX"] },
                { name: "Premiere Pro", group: ["3D/VFX"] },
                { name: "DaVinci Resolve", group: ["3D/VFX"] },
                { name: "Pytorch", group: ["Machine Learning"] },
                { name: "Keras", group: ["Machine Learning"] },
                { name: "TensorFlow", group: ["Machine Learning"] },
                { name: "Pandas", group: ["Machine Learning"] },
                { name: "Seaborn", group: ["Machine Learning"] },
                { name: "Jupyter Notebooks", group: ["Machine Learning"] },
                { name: "Deep Learning", group: ["Machine Learning"] },
                { name: "GANs", group: ["Machine Learning"] },
                { name: "Docker", group: ["Full-stack", "DevOps"] },
                { name: "Git", group: ["Full-stack", "DevOps"] },
                { name: "mySQL", group: ["Full-stack", "Databases"] },
                { name: "PostgreSQL", group: ["Full-stack", "Databases"] },
                { name: "MongoDB", group: ["Full-stack", "Databases"] },
                { name: "BigQuery", group: ["Full-stack", "Databases", "Cloud Computing"] },
                { name: "Cloud SQL", group: ["Full-stack", "Databases", "Cloud Computing"] },
                { name: "Cloud Storage", group: ["Full-stack", "Databases", "Cloud Computing"] },
                { name: "Pub/Sub", group: ["Cloud Computing"] },
                { name: "Dataflow", group: ["Cloud Computing"] },
                { name: "Dataproc", group: ["Cloud Computing"] },
                { name: "Cloud Functions", group: ["Cloud Computing"] },
                { name: "Spark", group: ["Cloud Computing"] },
            ]
        }
    }
})
