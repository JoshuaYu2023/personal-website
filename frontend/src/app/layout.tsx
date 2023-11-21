import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
    title: 'Personal Website',
    description: 'A personal portfolio website created using React, TailwindCSS, and DaisyUI',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html data-theme="dark" lang="en">
        <body>{children}</body>
        </html>
    )
}