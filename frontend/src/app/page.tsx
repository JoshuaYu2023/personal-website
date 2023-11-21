'use client'

import {Navbar} from "@/app/components/Navbar"
import {ProjectHero} from "@/app/components/ProjectHero";

export default function Home() {
    return (
        <>
        <Navbar />
            <ProjectHero image={'/aboutme.png'} alt={'Photo of the web page'} link={'/about-me'} title={'About Me'} description={'A short about me website made as a class assignment at CNM Ingenuities Deep Dive Full Stack Bootcamp. It was originally made using HTML, TailwindCSS, and DaisyUI, but has been transferred over to React to be used as a portfolio piece.'}/>
            {/*TODO: Make ProjectHero's for other projects I will work on. Make a brief description about the landing page*/}
        </>

    )
}