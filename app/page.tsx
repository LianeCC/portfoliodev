import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";
import { MoreAboutMe } from "./components/MoreAboutMe";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md"/>
      <Status/>
      <Spacing size="md"/>
      <MoreAboutMe />
      <Spacing size="md"/>
      <Footer />
    </main>
  );
}
