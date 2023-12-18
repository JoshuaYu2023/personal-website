export function Shuffle() {
    return (
        <div>
            <p className={"container text-center m-2 p-2 border-2 border-secondary rounded-lg"} id={"text"}>Life before death, strength before weakness, journey before destination. I will unite instead of divide. I will bring men together. I will take responsibility for what I have done. If I must fall, I will rise each time a better man.</p>
            <button className={'btn btn-xs sm:btn-sm md:btn-md btn-primary m-2'} onClick={HandleShuffle}>Shuffle Text</button>
            <button className={'btn btn-xs sm:btn-sm md:btn-md btn-primary m-2'} onClick={GoBack}>Reset</button>
        </div>
    )
}

function HandleShuffle() {
    const textElement = document.getElementById('text')
    const text = textElement ? textElement.textContent : ''
    // @ts-ignore
    const words = text.split(' ')
    words.sort(() => Math.random() - 0.5)
    const shuffledText = words.join(' ')
    textElement && (textElement.textContent = shuffledText)
}

function GoBack() {
    let element = document.getElementById('text')
    // @ts-ignore
    element.innerText = 'Life before death, strength before weakness, journey before destination. I will unite instead of divide. I will bring men together. I will take responsibility for what I have done. If I must fall, I will rise each time a better man.'
}