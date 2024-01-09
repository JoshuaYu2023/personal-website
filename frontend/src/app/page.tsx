'use client'

import {Navbar} from "@/app/components/Navbar"
import {ProjectHero} from "@/app/components/ProjectHero";

export default function Home() {
    return (
        <>
            <Navbar/>
            <ProjectHero image={'/aboutme.png'} alt={'Photo of the web page'} link={'/about-me'} title={'About Me'}
                         description={'A short about me website made as a class assignment at CNM Ingenuities Deep Dive Full Stack Bootcamp. It was originally made using HTML, TailwindCSS, and DaisyUI, but has been transferred over to React to be used as a portfolio piece.'}/>
            <ProjectHero image={'/js-events.png'} alt={'Under Construction'} link={'/js-events'} title={'JavaScript Events'} description={'A web page that depicts different functions that can be created with JavaScript.'}/>
            <ProjectHero image={'/construction.png'} alt={'Under Construction'} link={'/color-picker'} title={'Color Picker'} description={'A color wheel/picker web app. UNDER CONSTRUCTION'}/>
            <ProjectHero image={'/construction.png'} alt={'Under Construction'} link={'/shopping-list'} title={'Shopping List'} description={'A fully functioning shopping list web app. UNDER CONSTRUCTION'}/>
            <ProjectHero image={'/construction.png'} alt={'Under Construction'} link={'/'} title={'New Projects'} description={'Any new portfolio projects I make will go here!'}/>
            {/*TODO: Make ProjectHero's for other projects I will work on. Make a brief description about the landing page*/}
        </>

    )
}