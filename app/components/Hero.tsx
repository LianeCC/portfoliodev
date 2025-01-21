import { Section } from "./Section"

export const Hero = () => {
    return <Section className="flex max-lg:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-4xl text-primary">Liane Coupat Candoulives</h2>
            <h3 className="font-caption text-2xl ">Web Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="flex-1">
            <img src="/images/Liane-HD.jpg" className="w-full h-auto" alt="lianecc's picture"/>
        </div>
    </Section>
}