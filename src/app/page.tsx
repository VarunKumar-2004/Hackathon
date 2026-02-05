import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";

export default function Home() {
    return (
        <>
            <Hero />
            <Sponsors />
            <About />
            <Tracks />
            <Timeline />
            <FAQ />
        </>
    );
}
