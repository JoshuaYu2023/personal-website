import React, {useState} from 'react';

export function ColorWheel() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setElementBGColor = () => {
        const colorBox = document.getElementById("color-box")
        // @ts-ignore
        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    };

    const setDisplayValues = () => {
        const redVal = document.getElementById("redVal")
        const greenVal = document.getElementById("greenVal")
        const blueVal = document.getElementById("blueVal")

        // @ts-ignore
        redVal.innerText = red
        // @ts-ignore
        greenVal.innerText = green
        // @ts-ignore
        blueVal.innerText = blue
    };

    const handleColorChange = (e: any) => {
        const target = e.target
        const value = parseInt(target.value, 10)
        const name = target.name

        switch (name) {
            case 'red':
                setRed(value)
                break
            case 'green':
                setGreen(value)
                break
            case 'blue':
                setBlue(value)
                break
            default:
                break
        }

        setElementBGColor()
        setDisplayValues()
    }

    return (
        <div className={'grid justify-items-center mx-auto'}>
            <div id="color-box" className={'w-96 h-96 border-2 rounded-full'}></div>
            <div className={'grid justify-items-center mx-auto my-2'}>
                <input type="range" min="0" max="255" className="w-96" name="red" value={red}
                       onChange={handleColorChange}/>
                <input type="range" min="0" max="255" className="w-96" name="green" value={green}
                       onChange={handleColorChange}/>
                <input type="range" min="0" max="255" className="w-96" name="blue" value={blue}
                       onChange={handleColorChange}/>
            </div>
            <div>
                <span className={'m-4'} id="redVal">{red}</span>
                <span className={'m-4'} id="greenVal">{green}</span>
                <span className={'m-4'} id="blueVal">{blue}</span>
            </div>
        </div>
    )
}
