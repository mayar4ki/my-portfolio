import { Navbar } from "~/screens/home/layout/navbar";
import { Footer } from "~/screens/home/layout/footer";

import Hero from "./components/hero";
import Clients from "./components/clients";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Testimonial from "./components/testimonial";
import PopularClients from "./components/popular-clients";
import ContactForm from "./components/contact-form";


export const HomeIndexScreen = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Clients />
            <Skills />
            <Projects />
            <Resume />
            <Testimonial />
            <PopularClients />
            <ContactForm />
            <Footer />
        </>
    );
}
