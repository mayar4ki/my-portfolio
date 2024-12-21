import Hero from "./components/hero";
import Companies from "./components/companies";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import ContactForm from "./components/contact-form";
import Tech from "./components/tech";


export const HomeIndexScreen = () => {
    return (
        <>
            <Hero />
            <Companies />
            <Skills />
            <Tech />
            <Projects />
            <Resume />
            <ContactForm />
        </>
    );
}
