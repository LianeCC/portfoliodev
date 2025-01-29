import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";
import { MoreAboutMe } from "./components/MoreAboutMe";
import { Footer }  from "./components/Footer";
import { Skill } from "./components/Skills";


export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm"/>
      <Status/>
      <Spacing size="md"/>
      <Skill />
      <Spacing size="md"/>
      <MoreAboutMe />
      <Spacing size="md"/>
      <Footer />
    </main>
  );
}
