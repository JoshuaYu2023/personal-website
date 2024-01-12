import React, { useState } from "react"

export function Encrypt() {
    const [text, setText] = useState(
        "This text will change when you type in an input"
    )
    const handleWordsChange = (event: any) => {
        setText(event.target.value)
    }
    return (
        <div className={"container mx-auto grid grid-cols-2 gap-2"}>
            <textarea
                className={'text-black rounded-lg m-2'}
                onChange={handleWordsChange}
                placeholder={"Enter text here..."}
            />
            <p className={"container text-center m-2 p-2 border-2 border-primary rounded-lg"} id={'words'}>{text}</p>
            <button className={'btn btn-xs sm:btn-sm md:btn-md btn-primary m-2'} onClick={HandleEncryption}>Encrypt
            </button>
            <p>If you click the button again, it will reset the encryption, as the shift of 13 places is just back to
                the original form.</p>
        </div>
    )
}

function HandleEncryption() {
    const textElement = document.getElementById('words') as HTMLParagraphElement
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    textElement.innerText = textElement.innerText.replace(/[a-z]/gi, (letter) => {
        const index = originalAlpha.indexOf(letter)
        return index !== -1 ? cipher[index] : letter
    })
}