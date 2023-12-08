import Link from "next/link"

export function Anime() {
    return (
        <section className={"md:p-6"}>
            <h2 className={"text-lg font-bold text-center p-4"}>ANIME</h2>
            <div className={"grid grid-cols-3 m-8 p-2 gap-10"}>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'}
                          alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood'}
                          pic={'images/full-metal.jpg'} alt={'Fullmetal Alchemist: Brotherhood'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Jujutsu_Kaisen'} pic={'images/jujutsu-kaisen.jpg'}
                          alt={'Jujutsu Kaisen'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba'}
                          pic={'images/demon-slayer.jpg'} alt={'Demon Slayer: Kimetsu no Yaiba'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/My_Hero_Academia'} pic={'images/my-hero.jpg'}
                          alt={'My Hero Academia'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Attack_on_Titan'} pic={'images/attack-titan.jpg'}
                          alt={'Attack on Titan'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Gurren_Lagann'} pic={'images/gurren-lagaan.jpg'}
                          alt={'Gurren Lagann'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Your_Lie_in_April'} pic={'images/your-lie.jpg'}
                          alt={'Your Lie In April'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/Fairy_Tail'} pic={'images/fairy-tail.jpg'}
                          alt={'Fairy Tail'}/>
            </div>
        </section>
    )
}

type AnimePicProps = {
    link: string
    pic: string
    alt: string
}


function AnimePic({link, pic, alt}: AnimePicProps) {
    return (
        <Link href={link} target={"_blank"} rel={"noreferrer noopener"}>
            <img src={pic} alt={alt} className={"w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-wiggle-more animate-infinite animate-ease-linear animate-normal"}/></Link>
    )
}