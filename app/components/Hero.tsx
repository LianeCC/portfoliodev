import { SectionComponent } from "./Section"

export const Hero = () => {
    return <SectionComponent className="flex max-md:flex-col items-start gap-6">
        <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption text-4xl  text-primary">Liane Coupat Candoulives</h2>
            <h3 className="font-caption text-2xl font-bold">Web Developer</h3>
            <p className="text-justify">Développeuse web passionnée, je conçois des sites modernes et intuitifs, alliant esthétique, performance et innovation.</p>
        </div>
        <div className="flex-[2] max-md:m-auto ml-auto" >
            <img src="/images/Liane-HD.jpg" className="w-full h-auto rounded-lg max-w-xs max-md:w-56" alt="lianecc's picture"/>
        </div>
    </SectionComponent>
}