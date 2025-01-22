import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { LucideIcon } from "lucide-react";

export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-6">
        <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Projects</p>
        </Card>
        </div>
        <div className="flex-[2] flex flex-col gap-6 w-full">
            <Card className="p-4 flex-1">
                Work
            </Card>
            <Card className="p-4 flex-1">
                Contact me
            </Card>
        </div>
    </Section>
}

const Project = (props: { Logo: LucideIcon, title: string, description: string }) => {
    return (
        <div>
            <span className="bg-accent text-accent-foreground p-4 rounded-sm">
                <props.Logo />
            </span>
        </div>

    )
}