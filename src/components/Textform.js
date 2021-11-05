import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick = () => {
        settext(text.toUpperCase());
        props.showalert("Text converted to uppercase","success");
        
    }
    const handleloclick = () => {
        settext(text.toLowerCase());
        props.showalert("Text converted to lowercase","success");
        
    }
    const clear = () => {
        settext("");
        props.showalert("Text cleared","success");
    }
    const handlecopy = () => {
        var text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text copied to clipboard","success");
        
    }
    const handleonchange = (event) => {
        settext(event.target.value);

    }
    const [text, settext] = useState("enter text here");
    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>{props.heading}</h1>
                <div className="mb-3 my-4">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }} onChange={handleonchange} id="mytext" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloclick}>convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handlecopy}>copy text</button>
                <button className="btn btn-primary mx-1" onClick={clear}>clear text</button>

            </div>
            <div className={`container my-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
                <h1>YOUR TEXT SUMMARY</h1>
                <p>{text.length} characters and {(text.length===0 || (text[text.length-1]===" "))?text.split(" ").length-1:text.split(" ").length} words</p>
                <p>{0.008 * ((text.length===0 || (text[text.length-1]===" "))?text.split(" ").length-1:text.split(" ").length)} Minutes to read</p>
                <h3>PREVIEW</h3>
                <p>{text.length>0?text:"enter some text above to preview it here"}</p>
            </div>
        </>
    )
}
