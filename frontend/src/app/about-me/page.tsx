'use client'

import {Navbar} from "@/app/components/Navbar"
import {Header} from "@/app/components/Header"
import {AboutMeHero} from "@/app/about-me/components/AboutMeHero"
import {Carousel} from "@/app/about-me/components/Carousel"
import {DNDHero} from "@/app/about-me/components/DNDHero"
import {Anime} from "@/app/about-me/components/Anime"
import {ContactForm} from "@/app/about-me/components/ContactForm"
import {Footer} from "@/app/components/Footer"



export default function AboutMe() {
    return (
        <>
            <div style={{backgroundImage: `url(/pwp-bg.jpg)`}}>
                <Navbar/>
                <Header text={'Welcome! This is my personal website project that I made while taking CNM Ingenuity\'s Deep Dive Fullstack coding Bootcamp. Allow me to show you some of what I have learned via my interests!'}/>
                <AboutMeHero/>
                <div className={'container mx-auto my-4 md:flex gap-12 max-md:space-y-12'}>
                    <Carousel/>
                    <DNDHero/>
                </div>
                <div className={'container mx-auto my-4 md:flex gap-12 max-md:space-y-12'}>
                    <Anime/>
                    <ContactForm/>
                </div>
                <Footer/>
            </div>
        </>

    )
}