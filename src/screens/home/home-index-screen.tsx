import { Header } from "~/screens/home/layout/header";
import { Footer } from "~/screens/home/layout/footer";

import Hero from "./components/hero";
import Companies from "./components/companies";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Testimonial from "./components/testimonial";
import ContactForm from "./components/contact-form";
import Tech from "./components/tech";


export const HomeIndexScreen = () => {
    return (
        <>
            <Header />
            <Hero />
            <Companies />
            <Skills />
            <Tech />
            <Projects />
            <Resume />
            <Testimonial />
            <ContactForm />
            <Footer />
        </>
    );
}
