import Link from "next/link";

export function Anime() {
    return(
        <section className={"md:p-6"}>
            <h2 className={"text-lg font-bold text-center p-4"}>ANIME</h2>
            <div className={"grid grid-cols-3 m-8 p-2 gap-10"}>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
                <AnimePic link={'https://en.wikipedia.org/wiki/One_Piece'} pic={'images/one-piece.jpg'} alt={'One Piece'}/>
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
    return(
        <Link href={link} target={"_blank"} rel={"noreferrer noopener"}><img src={pic} alt={alt} className={"w-40 h-40 animate-wiggle-more animate-infinite animate-ease-linear animate-reverse"}/></Link>
    )
}