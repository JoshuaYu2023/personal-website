type HeaderProps = {
    text: string
}

export function Header({text}: HeaderProps) {
    return (
        <div className={"container mx-auto"}>
            <section className={"p-4 text-center"}>
                <h1 className={"sm:text-sm md:text-lg"}>{text}</h1>
            </section>
        </div>
    )
}