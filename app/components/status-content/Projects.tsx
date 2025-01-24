import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { ProjectProps } from "./types";
import { Code } from "lucide-react";

const PROJECTS = [
    {
        Logo: Code,
        title: "Projet 3",
        description: "javascript",
        nomUrl: "repo github",
        url: "/projet-3",
    },
    // Ajout d'autres projets à la suite
];

export const Projects = () => {
    const Project = dynamic(() => Promise.resolve(ProjectContent), { ssr: false });

    return (
        <div className="w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Projects</p>
                <div className="flex flex-col gap-4">
                    {PROJECTS.map((project, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>{project.title}</AccordionTrigger>
                                <AccordionContent>
                                    <Project {...project} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </Card>
        </div>
    );
};

const ProjectContent = (props: ProjectProps) => {
    return (
        <div className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
            <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
                <a href={props.url} className="text-sm text-muted-foreground">
                    {props.nomUrl}
                </a>
            </div>
        </div>
    );
};
