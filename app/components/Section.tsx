import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const SectionComponent = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <section className={cn("max-w-5xl px-4 m-auto", props.className)}>
            {props.children}
        </section>
    )
}