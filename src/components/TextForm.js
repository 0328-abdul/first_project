import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const [font, setFont] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Text has been converted to uppercase', 'success')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Text has been converted to lowercase', 'success')
    }
    const handleClearClick = (e) => {
        setText('')
        props.showAlert('Text has been cleared', 'success')
    }
    const handleFont = () => {
        let newText = ['arial', 'courier', 'times', 'cursive', 'fantasy', 'monospace', 'verdana'];
        let random = Math.floor(Math.random() * newText.length);
        setFont(newText[random])
        props.showAlert('Font style changed!!', 'success')
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="form-group purple-border mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ fontFamily: font }} id="exampleFormControlTextarea4" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-sm btn-primary mx-1 my-1' onClick={handleUpClick}>Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-sm btn-primary mx-1 my-1' onClick={handleLowClick}>Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-sm btn-danger mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-sm btn-success mx-1 my-1' onClick={handleFont}>Change Font</button>
            </div>
            <div className="container my-3">
                <h4>Your Text Summary</h4>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters..</p>
                <p>An average reader can read this in {(text === '' ? 0 : text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.0033 * 60).toFixed(3)} seconds..</p>
            </div>
        </>
    )
}
