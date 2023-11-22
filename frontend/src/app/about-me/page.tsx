'use client'

import {Navbar} from "@/app/components/Navbar"
import {Header} from "@/app/about-me/components/Header"
import {AboutMeHero} from "@/app/about-me/components/AboutMeHero";


export default function AboutMe() {
    return (
        <>
            <div style={{backgroundImage: `url(/pwp-bg.jpg)`}}>
                <Navbar/>
                <Header/>
                <AboutMeHero/>
                {/*TODO: copy over components from HTML doc. */}
            </div>
        </>

    )
}