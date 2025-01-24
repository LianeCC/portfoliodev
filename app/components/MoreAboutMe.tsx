import { SectionComponent } from "./Section"
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils"

const Code = ({ className,...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span className={cn("bg-accent/20 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-sm", className)} {...props} />
    );
};

export const MoreAboutMe = () => {
    return <SectionComponent >
        <h2 className="font-caption text-4xl  text-primary">More about me</h2>
        <br/>
        <p className="text-justify">Développeuse web passionnée, je me spécialise dans la création de sites et d’applications modernes. Curieuse par nature, je suis constamment à la recherche de nouveaux défis à relever et de technologies innovantes à explorer.J’ai à cœur de concevoir des interfaces intuitives, alliant esthétique et performance, tout en plaçant l’utilisateur au centre de chaque projet. </p> 
        <br/>
        <p className="text-justify">Mon expertise est principalement orientée vers le développement Front-end, avec une stack actuelle incluant <Link href="#"><Code>React</Code></Link>, <Link href="#"><Code>Node.js</Code></Link>, <Link href="#"><Code>Tailwind</Code></Link>, <Link href="#"><Code>Typescript</Code></Link>.</p>
        <br/>
        <p className="text-justify">Toujours désireuse de progresser, j’apprends vite et m’adapte facilement aux nouvelles technologies. Je souhaite également approfondir mes compétences en Back-end afin de mieux appréhender tout type de projet et d’élargir mon champ d’intervention.</p>
        <br/>
        <p className="text-justify">En dehors du développement, je suis passionnée par la biologie, l’art équestre (que je pratique depuis plus de 25 ans) et la cuisine. Ces passions nourrissent ma créativité et enrichissent ma manière d’aborder mes projets avec originalité.</p> 

    </SectionComponent>
}