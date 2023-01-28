import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="form-group purple-border mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea4" rows="8"></textarea>
                </div>
                <button className='btn btn-sm btn-primary mx-1' onClick={handleUpClick}>Uppercase</button>
                <button className='btn btn-sm btn-primary mx-1' onClick={handleLowClick}>Uppercase</button>
            </div>
            <div className="container my-3">
                <h4>Your Text Summary</h4>
                <p>{text.split(" ").length} words and {text.length} characters..</p>
            </div>
        </>
    )
}
