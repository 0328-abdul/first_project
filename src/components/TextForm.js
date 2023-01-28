import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="form-group purple-border mb-2">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea4" rows="8"></textarea>
            </div>
            <button className='btn btn-sm btn-primary' onClick={handleUpClick}>Uppercase</button>
        </div>
    )
}
