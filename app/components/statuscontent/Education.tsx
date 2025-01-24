import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { FormationProps } from "./types";
import { Code } from "lucide-react";

const FORMATIONS = [
    {
        Logo : Code,
        title: "Développeur Web",
        description: "OpenClassrooms",
        date: "février 2025",
        url: "/formation-1",
    },
    // Ajoute plus de formations ici
];

export const Formations = () => {
    const Formation = dynamic(() => Promise.resolve(FormationContent), { ssr: false });

    return (
        <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Formations</p>
            <div className="flex flex-col gap-4">
                {FORMATIONS.map((formation, index) => (
                    <Formation key={index} {...formation} />
                ))}
            </div>
        </Card>
    );
};

const FormationContent = (props: FormationProps) => {
    return (
        <a href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/20 transition-colors p-2 rounded">
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
            <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
                <p className="text-sm text-muted-foreground">{props.date}</p>
            </div>
        </a>
    );
};
