export function Shuffle() {
    return (
        <div>
            <p id={"text"}>This is some text to shuffle.</p>
            <button onClick={HandleShuffle}>Shuffle Text</button>
            <button onClick={GoBack}>Reset</button>
        </div>
    )
}

function HandleShuffle() {
    const textElement = document.getElementById('text')
    const text = textElement ? textElement.textContent : ''
    const words = text.split(' ')
    words.sort(() => Math.random() - 0.5)
    const shuffledText = words.join(' ')
    textElement && (textElement.textContent = shuffledText)
}

function GoBack() {
    let element = document.getElementById('text')
    element.innerText = 'Life before death, strength before weakness, journey before destination. I will unite instead of divide. I will bring men together. I will take responsibility for what I have done. If I must fall, I will rise each time a better man.'
}