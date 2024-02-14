import Link from "next/link"

export function ContactForm() {
    return (
        <section className={'md:p-6'}>
            <div className={'py-8 px-4 mx-auto max-w-screen-md'}>
                <h2 className={'text-lg font-bold p-4'}>Contact Me! I would love to hear from you!</h2>
            </div>
            <div className={'grid grid-cols-2 justify-items-center'}>
                <Links link={'https://www.linkedin.com/in/joshayu23/'} pic={'images/linked-in.jpg'}
                       alt={'LinkedIn Link'}/>
                <Links link={'https://github.com/JoshuaYu2023'} pic={'images/github.jpg'} alt={'GitHub Link'}/>
            </div>
            <div className={'py-8 px-4 mx-auto max-w-screen-md'}>
                <p className={'p-4 bg-white bg-opacity-10 rounded-lg'}>Please reach out to me at <a
                    className={'link text-green-600'} href={'mailto:joshayu17@outlook.com'}>joshayu17@outlook.com</a>.
                    Thank you!</p>
            </div>
        </section>
    )
}


type LinkProps = {
    link: string
    pic: string
    alt: string
}


function Links({link, pic, alt}: LinkProps) {
    return (
        <Link href={link} target={"_blank"} rel={"noreferrer noopener"} className={'w-24 h-24 '}><img src={pic}
                                                                                                      alt={alt}
                                                                                                      className={"rounded-full"}/></Link>
    )
}