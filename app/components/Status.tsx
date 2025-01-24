import { SectionComponent } from "./Section";
import { Projects } from "./maincontent/Projects";
import { Formations } from "./maincontent/Education";
import { Experiences } from "./maincontent/WorkExperience";

export const Status = () => {
    return (
        <SectionComponent className="flex flex-col gap-6">
            <Projects />
            <div className="flex flex-wrap gap-6 w-full">
                <Formations />
                <Experiences />
            </div>
        </SectionComponent>
    );
};