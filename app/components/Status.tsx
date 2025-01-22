import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from "next/link";


export const Status = () => {
    return <Section className="flex flex-col gap-6">
        <div className=" w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Projects</p>
                <div className="flex flex-col gap-4">
                    {PROJECTS.map((project,index) => (
                        <Project
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                        />
                    ))}
                </div>
            </Card>
        </div>
        <div className="flex flex-wrap gap-6 w-full">
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Formations</p>
                <div className="flex flex-col gap-4">
                    {FORMATIONS.map((formation,index) => (
                        <Formation
                        key={index}
                        Logo={formation.Logo}
                        title={formation.title}
                        description={formation.description}
                        date={formation.date}
                        url="/"
                        />
                    ))}
                </div>
            </Card>
            <Card className="p-4 flex-1">
                <p className="text-lg text-muted-foreground">Expériences</p>
            </Card>
        </div>
    </Section>
};

const PROJECTS = [
    {
        Logo: Code,
        title: "Projet 3",
        description: "javascript",    
        url: "/projet-3",
    },
    {
        Logo: Code,
        title: "Projet 5",
        description: "app web avec React",
        url: "/projet-5",
    },
    {
        Logo: Code,
        title: "Projet 6",
        description: "dev back-end",
        url: "/projet-6",
    },
]

type ProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const Project = dynamic(() => Promise.resolve(ProjectContent), { ssr: false });

const ProjectContent = (props: ProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};


const FORMATIONS = [
    {
        Logo: Code,
        title: "Développeur Web",
        description: "OpenClassrooms",  
        date: "février 2025",  
        url: "/projet-3",
    },
    {
        Logo: Code,
        title: "MSc Marketing & Management des Services",
        description: "IAE d'Aix-en-Provence",
        date: "2015",
        url: "/projet-5",
    },
]

type FormationProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    date: string;
    url: string;
};

const Formation = dynamic(() => Promise.resolve(FormationContent), { ssr: false });

const FormationContent = (props: FormationProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo size={16}/>
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
};