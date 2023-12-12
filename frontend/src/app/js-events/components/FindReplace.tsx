import React, { useState } from "react"

export function Content() {
    return(
        <section>
            <div className={'container mx-auto my-4'}>
                <h1 className={'font-bold italic'}>Find and Replace</h1>
                <p>Another thing you can do with JavaScript is take a sentence or paragraph and find specific words, replace them with something else, and see your new sentence! Let's do that below!</p>
            </div>
            <div>
                <FindAndReplace/>
            </div>
        </section>
    )
}

export function FindAndReplace () {
    const [text, setText] = useState(
        "This text will change"
    )
    const [findTerm, setFindTerm] = useState("")
    const [replaceTerm, setReplaceTerm] = useState("")
    const handleFindAndReplace = () => {
        setText(text.replaceAll(findTerm, replaceTerm))
    }
    const handleTextChange = (event: any) => {
        setText(event.target.value)
    }
    const handleFindTermChange = (event: any) => {
        setFindTerm(event.target.value)
    }
    const handleReplaceTermChange = (event: any) => {
        setReplaceTerm(event.target.value)
    }
    return (
        <div className={"container mx-auto"}>
            <textarea
                onChange={handleTextChange}
                placeholder={"Enter text here..."}
            />
            <div className={"container mx-auto grid my-2"}>
                <label htmlFor={"find-term"}>Find:</label>
                <input
                    type={"text"}
                    id={"find-term"}
                    value={findTerm}
                    onChange={handleFindTermChange}
                    placeholder={"Enter word/phrase to find"}
                />
                <label htmlFor={"replace-term"}>Replace with:</label>
                <input
                    type={"text"}
                    id={"replace-term"}
                    value={replaceTerm}
                    onChange={handleReplaceTermChange}
                    placeholder={"Enter replacement word/phrase"}
                />
            </div>
            <button className={'btn btn-outline'} onClick={handleFindAndReplace}>Find & Replace All</button>
            <p className={"container text-center my-2 p-2 border-2 border-green-800"}>{text}</p>
        </div>
    )
}