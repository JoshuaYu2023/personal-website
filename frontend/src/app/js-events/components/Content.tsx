import {FindAndReplace} from "@/app/js-events/components/FindReplace";
import {Shuffle} from "@/app/js-events/components/Shuffle";

export function Content() {
    return (
        <div>
            <section className={'container border-2 border-primary mx-auto my-4 px-4'}>
                <div className={'my-4'}>
                    <h1 className={'font-bold italic'}>Find and Replace</h1>
                    <p>One thing you can do with JavaScript is take a sentence or paragraph and find specific words,
                        replace
                        them with something else, and see your new sentence! Let's do that below!</p>
                </div>
                <div className={'my-4'}>
                    <FindAndReplace/>
                </div>
            </section>
            <section className={'container border-2 border-primary mx-auto my-4 px-4'}>
                <div className={'my-4'}>
                    <h1 className={'font-bold italic'}>Shuffle</h1>
                    <p>Another thing you can do with JavaScript is take a sentence or paragraph and shuffle the order of the words at the click of a button!</p>
                </div>
                <div className={'my-4'}>
                    <Shuffle/>
                </div>
            </section>
            <section className={'container border-2 border-primary mx-auto my-4 px-4'}>
                <div className={'my-4'}>
                    <h1 className={'font-bold italic'}>Encrypt</h1>
                    <p>An interesting thing you can do with JavaScript is take a sentence or paragraph and encrypt it. This type of encryption is called ROT13 Encryption. It takes a sentence or paragraph and shifts it 13 places along the alphabet. Try it out!</p>
                </div>
                <div className={'my-4'}>

                </div>
            </section>
        </div>
    )
}
