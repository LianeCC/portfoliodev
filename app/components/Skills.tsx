import { SectionComponent } from "./Section"

const skills = [
    { name : "HTML 5", icon : "/logos/logoHtml.png" },
    { name : "CSS 3", icon : "/logos/logoCss3.png" },
    { name : "JavaScript", icon : "/logos/logoJavascript.png" },
    { name : "React", icon : "/logos/logoReact.png" },
    { name : "Next.js", icon : "/logos/logoNextJs.jpg" },
    { name : "Tailwind CSS", icon : "/logos/logoTailwind.png" },
    { name : "Node.js", icon : "/logos/logoNodejs.png" },
    { name : "Express", icon : "/logos/logoExpressjs.png" },
    { name : "MongoDB", icon : "/logos/logoMongodb.png" },
    { name : "Git", icon : "/logos/logoGitCrop.png"},
]


export const Skill = () => {
    return <SectionComponent className="flex flex-col items-center gap-6">
        <h2 className="font-caption text-4xl text-primary">Skills & Tools</h2>
        <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center w-24">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm">{skill.name}</p>
                </div>
            ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-6">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center w-24">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm">{skill.name}</p>
                </div>
            ))}
        </div>
    </SectionComponent>
}
        /* <SectionComponent className="flex flex-col items-center gap-6">

    <h2 className="font-caption text-4xl text-primary">Skills & Tools</h2>
    
    <div className="relative w-full overflow-hidden">
        <div className="absolute flex animate-scroll-left gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center w-24">
                    <div className="w-20 h-20 rounded-full bg-white-200 flex items-center justify-center mb-2">
                        <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain"/>
                    </div>
                    <p className="text-sm">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>

    <div className="relative w-full overflow-hidden mt-6">
        <div className="absolute flex animate-scroll-right gap-8">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center text-center w-24">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain"/>
                    </div>
                    <p className="text-sm">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
</SectionComponent> */
