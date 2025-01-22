import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils"
import { Section } from "./Section"
import Link from "next/link";


const Code = ({ className,...props }: ComponentPropsWithoutRef<"span">) => {
return (
    <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent p-1 text-primary rounded-sm", className)} {...props} />
);
};


export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start gap-6">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption text-4xl  text-primary">Liane Coupat Candoulives</h2>
            <h3 className="font-caption text-2xl font-bold">Web Developer</h3>
            <p>Lorem 
                <Link href="#"> <Code>ipsum dolor</Code> </Link>
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto" >
            <img src="/images/Liane-HD.jpg" className="w-full h-auto rounded-lg max-w-xs max-md:w-56" alt="lianecc's picture"/>
        </div>
    </Section>
}