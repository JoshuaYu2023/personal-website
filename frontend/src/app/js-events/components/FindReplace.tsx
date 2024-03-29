import React, { useState } from "react"

export function FindAndReplace () {
    const [text, setText] = useState(
        "This text will change when you type in an input"
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
        <div className={'container mx-auto grid grid-cols-2 gap-2'}>
            <textarea
                className={'text-black rounded-lg m-2'}
                onChange={handleTextChange}
                placeholder={"Enter text here..."}
            />
            <p className={'container text-center m-2 p-2 border-2 border-primary rounded-lg'}>{text}</p>
            <div className={'container mx-auto my-2 grid gap-2'}>
                <label className={'mx-5'} htmlFor={"find-term"}>Find:</label>
                <input
                    className={'text-black w-40 sm:w-auto rounded-lg m-2'}
                    type={'text'}
                    id={'find-term'}
                    value={findTerm}
                    onChange={handleFindTermChange}
                    placeholder={""}
                />
                <label className={'mx-5'} htmlFor={'replace-term'}>Replace with:</label>
                <input
                    className={'text-black w-40 sm:w-auto rounded-lg m-2'}
                    type={'text'}
                    id={'replace-term'}
                    value={replaceTerm}
                    onChange={handleReplaceTermChange}
                    placeholder={""}
                />
            </div>
            <button className={'btn btn-xs sm:btn-sm md:btn-md btn-primary m-2'} onClick={handleFindAndReplace}>Find & Replace All</button>
        </div>
    )
}