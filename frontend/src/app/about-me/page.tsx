'use client'

import {Navbar} from "@/app/components/Navbar"
import {Header} from "@/app/about-me/components/Header"
import {AboutMeHero} from "@/app/about-me/components/AboutMeHero";
import {Carousel} from "@/app/about-me/components/Carousel";
import {DNDHero} from "@/app/about-me/components/DNDHero";


export default function AboutMe() {
    return (
        <>
            <div style={{backgroundImage: `url(/pwp-bg.jpg)`}}>
                <Navbar/>
                <Header/>
                <AboutMeHero/>
                <div className={"container mx-auto my-4 md:flex gap-12 max-md:space-y-12"}>
                    <Carousel/>
                    <DNDHero/>
                </div>
                {/*TODO: copy over components from HTML doc. */}
            </div>
        </>

    )
}