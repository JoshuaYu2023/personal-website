'use client'

import {Navbar} from "@/app/components/Navbar"
import {Header} from "@/app/components/Header"
import {Footer} from "@/app/components/Footer"
import {Content} from "@/app/js-events/components/Content"

export default function JavaScriptEvents() {
    return (
        <>
            <Navbar/>
            <Header
                text={'JavaScript is the part of code that makes a website do something. Every button and link that you click has a JavaScript code snippet attached to it to make it work. Everything beyond text and color is JavaScript. On this page, I\'ll display some of the things you can do with JavaScript'}/>
            <Content/>
            <Footer/>
        </>
    )
}