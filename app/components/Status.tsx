import { SectionComponent } from "./Section";
import { Projects } from "./statuscontent/Projects";
import { Formations } from "./statuscontent/Education";
import { Experiences } from "./statuscontent/WorkExperience";

export const Status = () => {
    return (
        <SectionComponent className="flex flex-col gap-10">
            <Projects />
            <div className="flex flex-wrap gap-10 w-full">
                <Formations />
                <Experiences />
            </div>
        </SectionComponent>
    );
};