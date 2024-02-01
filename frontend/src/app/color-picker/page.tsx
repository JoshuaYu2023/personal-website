'use client'


import {Navbar} from "@/app/components/Navbar";
import {Footer} from "@/app/components/Footer";
import {Header} from "@/app/components/Header";
import {ColorWheel} from "@/app/color-picker/components/ColorWheel";

export default function ColorPicker() {
    return (
        <>
            <Navbar/>
            <Header text={'This was a project created during CNM Ingenuities Deep Dive Bootcamp. It was originally created with vanilla HTML, CSS, and JavaScript. It has been revamped to use React and TailwindCSS.'}/>
            <ColorWheel/>
            <Footer/>
        </>
    )
}