export function Encrypt() {
    return (
        <div>
            <p className={'container text-center m-2 p-2 border-2 border-secondary rounded-lg'} id={'words'}>He was running through mists again. Walls, people, buildings all faded. Nothing but dark, swirling mists. But the mists had never been his enemy. Life as a human being is about posturing and influence. "I am the one thing you can never kill. I am Hope."</p>
            <button className={'btn btn-xs sm:btn-sm md:btn-md btn-primary m-2'} onClick={HandleEncryption}>Encrypt</button>
            <p>If you click the button again, it will reset the encryption, as the shift of 13 places is just back to the original form.</p>
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