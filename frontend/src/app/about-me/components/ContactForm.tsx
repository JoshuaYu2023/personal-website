import Link from "next/link";

export function ContactForm() {
    return (
        <section className={"md:p-6"}>
            <h2 className={"text-lg font-bold p-4"}>Contact Me! I would love to hear from you!</h2>
            <div className={"block"}>
                <Links link={'https://www.linkedin.com/in/joshayu23/'} pic={'images/linked-in.jpg'}
                       alt={'LinkedIn Link'}/>
                <Links link={'https://github.com/JoshuaYu2023'} pic={'images/github.jpg'} alt={'GitHub Link'}/>
                <div className={"py-8 px-4 mx-auto max-w-screen-md"}>
                    <form action={"mailto:joshayu17@outlook.com"} method={"post"} encType={"multipart/form-data"}
                          className={"space-y-8"}>
                        <ContactFormInput label={'Your email'} type={'email'} id={'email'} placeholder={'name@email.com'}/>
                        <ContactFormInput label={'Subject'} type={'text'} id={'subject'} placeholder={'Name'}/>
                        <ContactFormTextArea label={'Your message'} id={'message'} placeholder={'Leave a comment...'} rows={6}/>
                        <ContactFormButton label={'Send message'}/>
                    </form>
                </div>
            </div>
        </section>
    )
}


type LinkProps = {
    link: string
    pic: string
    alt: string
}

type FormInputProps = {
    label: string
    type: string
    id: string
    placeholder: string
}

type TextAreaProps = {
    label: string
    id: string
    placeholder: string
    rows: number
}

type ButtonProps = {
    label: string
}


function Links({link, pic, alt}: LinkProps) {
    return (
        <Link href={link} target={"_blank"} rel={"noreferrer noopener"}><img src={pic} alt={alt}
                                                                             className={"rounded-full w-24 h-24"}/></Link>
    )
}

function ContactFormInput({label, type, id, placeholder}: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className={"block mb-2 text-sm font-medium"}>{label}</label>
            <input type={type} id={id}
                   className={"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"}
                   placeholder={placeholder} required/>
        </div>
    )
}

function ContactFormTextArea({label, id, placeholder, rows}: TextAreaProps) {
    return (
        <div className={"sm:col-span-2"}>
            <label htmlFor={id} className={"block mb-2 text-sm font-medium"}>{label}</label>
            <textarea id={id} rows={rows}
                      className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"}
                      placeholder={placeholder}></textarea>
        </div>
    )
}

function ContactFormButton({label}: ButtonProps) {
    return (
        <button type={'submit'}
                className={"bg-green-500 hover:bg-green-700 py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit"}>{label}
        </button>
    )
}