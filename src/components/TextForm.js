import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleClrClick = ()=>{
        let newText = "";
        setText(newText)
    }

    const handleEmailClick = ()=>{
        let newText =(text.match.email); //=== "@"); {
        setText(newText)
    }

    const [text, setText] = useState("Enter Text Here")
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClrClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleEmailClick}>Extract Email</button>
        <br/>
        <h2>Your Text Summary</h2>
        <p>Word Count:{text.split(" ").length-1} and {text.length} Characters</p>
    <p>Minutes To Read:{0.008*text.split("").length}</p>
    <h2>Preview</h2>
    {text}
    </div>

    )
}

























