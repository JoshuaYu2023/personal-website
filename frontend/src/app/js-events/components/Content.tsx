import {FindAndReplace} from "@/app/js-events/components/FindReplace";

export function Content() {
    return(
        <section className={'container border-2 border-primary mx-auto px-4'}>
            <div className={'my-4'}>
                <h1 className={'font-bold italic'}>Find and Replace</h1>
                <p>One thing you can do with JavaScript is take a sentence or paragraph and find specific words, replace them with something else, and see your new sentence! Let's do that below!</p>
            </div>
            <div className={'my-4'}>
                <FindAndReplace/>
            </div>
        </section>
    )
}
