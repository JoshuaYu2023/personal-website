import Link from "next/link";

type ProjectHeroProps = {
    image: string,
    alt: string,
    link: string,
    title: string,
    description: string
}


export function ProjectHero({image, alt, link, title, description}: ProjectHeroProps) {
    return (
        <div className={'p-6'}>
            <div className={"hero mx-auto w-full h-auto border-8 border-green-800"}>
                <div className={"hero-content flex-col lg:flex-row-reverse"}>
                    <img src={image} className={"max-w-xl rounded-lg"} alt={alt}/>
                    <div>
                        <Link href={link}><h1 className={"text-5xl font-bold"}>{title}</h1></Link>
                        <p className="py-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}