'use client';

import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ChevronDown, ChevronUp } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

export const Status = () => {
    return (
        <Section className="flex flex-col gap-6">
            <div className="w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Projects</p>
                    <div className="flex flex-col gap-4">
                        {PROJECTS.map((project, index) => (
                            <ProjectAccordion
                                key={index}
                                project={project}
                            />
                        ))}
                    </div>
                </Card>
            </div>

            <div className="flex gap-6">
                <Card className="flex-1 p-4">
                    <p className="text-lg text-muted-foreground">Formations</p>
                    <div className="flex flex-col gap-4">
                        {FORMATIONS.map((formation, index) => (
                            <Formation
                                key={index}
                                Logo={formation.Logo}
                                title={formation.title}
                                description={formation.description}
                                date={formation.date}
                                url={formation.url}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="flex-1 p-4">
                    <p className="text-lg text-muted-foreground">Expériences</p>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-muted-foreground">
                            Ajoutez ici vos expériences professionnelles ou projets passés.
                        </p>
                    </div>
                </Card>
            </div>
        </Section>
    );
};

// Données des projets
const PROJECTS = [
    {
        title: "Projet 3",
        description: "Javascript",
        details: "Détails sur le projet 3 : Réalisation d'une application en JavaScript avec manipulation DOM",
        url: "/projet-3",
    },
    {
        title: "Projet 5",
        description: "App web avec React",
        details: "Détails sur le projet 5 : Développement d'une SPA en React, avec gestion d'état global et intégration API",
        url: "/projet-5",
    },
    {
        title: "Projet 6",
        description: "Dev back-end",
        details: "Détails sur le projet 6 : Node.js, Express et MongoDB",
        url: "/projet-6",
    },
];

// Composant ProjectAccordion
const ProjectAccordion = dynamic(
    () => Promise.resolve(ProjectAccordionContent),
    { ssr: false }
);

const ProjectAccordionContent = ({ project }: { project: typeof PROJECTS[0] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-border rounded">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-accent/20 transition-colors"
            >
                <div>
                    <p className="text-lg font-semibold">{project.title}</p>
                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>
                </div>
                {isOpen ? (
                    <ChevronUp size={20} className="text-muted-foreground" />
                ) : (
                    <ChevronDown size={20} className="text-muted-foreground" />
                )}
            </button>
            {isOpen && (
                <div className="p-4 border-t border-border text-sm text-muted-foreground">
                    <p>{project.details}</p>
                    <Link href={project.url} className="text-primary hover:underline">
                        Voir plus
                    </Link>
                </div>
            )}
        </div>
    );
};

// Données des formations
const FORMATIONS = [
    {
        Logo: ChevronDown,
        title: "Développeur Web",
        description: "OpenClassrooms",
        date: "Février 2025",
        url: "/projet-3",
    },
    {
        Logo: ChevronDown,
        title: "MSc Marketing & Management des Services",
        description: "IAE d'Aix-en-Provence",
        date: "2015",
        url: "/projet-5",
    },
];

// Composant Formation
const Formation = dynamic(
    () => Promise.resolve(FormationContent),
    { ssr: false }
);

const FormationContent = ({
    Logo,
    title,
    description,
    date,
    url,
}: {
    Logo: React.FC;
    title: string;
    description: string;
    date: string;
    url: string;
}) => {
    return (
        <Link href={url} className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
                <p className="text-sm text-muted-foreground">{date}</p>
            </div>
        </Link>
    );
};
