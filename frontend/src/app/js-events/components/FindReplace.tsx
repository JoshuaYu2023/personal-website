import React, { useState } from "react"

export function Content() {
    return(
        <section className={'container border-2 border-green-800 mx-auto px-4'}>
            <div className={'my-4'}>
                <h1 className={'font-bold italic'}>Find and Replace</h1>
                <p>Another thing you can do with JavaScript is take a sentence or paragraph and find specific words, replace them with something else, and see your new sentence! Let's do that below!</p>
            </div>
            <div className={'my-4'}>
                <FindAndReplace/>
            </div>
        </section>
    )
}

function FindAndReplace () {
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
        <div className={"container mx-auto grid grid-cols-2"}>
            <textarea
                onChange={handleTextChange}
                placeholder={"Enter text here..."}
            />
            <p className={"container text-center m-2 p-2 border-2 border-green-800"}>{text}</p>
            <div className={"container mx-auto my-2 grid"}>
                <label className={'mx-5'} htmlFor={"find-term"}>Find:</label>
                <input
                    className={'text-black'}
                    type={"text"}
                    id={"find-term"}
                    value={findTerm}
                    onChange={handleFindTermChange}
                    placeholder={"Enter word/phrase to find"}
                />
                <label className={'mx-5'} htmlFor={"replace-term"}>Replace with:</label>
                <input
                    className={'text-black'}
                    type={"text"}
                    id={"replace-term"}
                    value={replaceTerm}
                    onChange={handleReplaceTermChange}
                    placeholder={"Enter replacement word/phrase"}
                />
            </div>
            <button className={'btn btn-outline m-2'} onClick={handleFindAndReplace}>Find & Replace All</button>
        </div>
    )
}