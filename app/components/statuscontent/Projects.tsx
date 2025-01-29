import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Javascript",
        description: "Création d'un site web - utilisation de Javascript, gestion des évènements utilisateurs et manipulation des éléments du DOM.",
        url: "https://projet3-omega.vercel.app/",
        urlGithub: "https://github.com/LianeCC/projet3",
        image: "https://api.apiflash.com/v1/urltoimage?access_key=0a2809377e1c4f0688271bc53b68a52f&url=https://projet3-omega.vercel.app/&format=png&full_page=true",
    },
    {
        title: "App web avec react",
        description: "Implémentation du front-end d'une application avec React et React router - Configuration de la navigation, développement de composants React, utilisation de Sass, animations CSS",
        url: "https://projet5-eight.vercel.app/",
        urlGithub: "https://github.com/LianeCC/projet5",
        image: "https://api.apiflash.com/v1/urltoimage?access_key=0a2809377e1c4f0688271bc53b68a52f&url=https://projet5-eight.vercel.app/&format=png&full_page=true",

    },
    {
        title: "Back end avec Node.js",
        description: "Création d'un serveur avec Express et connexion à la base de données MongoDB - Création d'une API RESTful, stockage de données sécurisé, gestion des utilisateurs et des droits.",
        url: "https://projet6-eight.vercel.app/",
        urlGithub: "https://github.com/LianeCC/projet6",
        image: "https://api.apiflash.com/v1/urltoimage?access_key=0a2809377e1c4f0688271bc53b68a52f&url=https://projet6-eight.vercel.app/&format=png&full_page=true",

    },
    // Ajout d'autres projets à la suite
];

export const Projects = () => {
    return (
        <div className="w-full border-none">
            <Card className="w-full p-4 flex flex-col gap-4">
            <h2 className="font-caption text-4xl text-primary py-4">Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <Link href={project.url} target="_blank" className="group relative w-full max-h-[300px] overflow-hidden rounded-lg">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </Link>
                            <div className="mt-2">
                                <p className="text-lg font-bold">{project.title}</p>
                                <p className="text-muted-foreground">{project.description}</p>
                                <Link href={project.urlGithub} target="_blank" className="hover:text-primary">Voir sur GitHub</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};
