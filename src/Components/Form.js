import React from 'react'
import { useState } from 'react'

export default function Form(props) {

    const [text, setText] = useState("Enter Text Here")

    function upperCase() {
        let newTxt = text.toString().toUpperCase()
        setText(newTxt)

        props.alertFunc("Converted to uppercase","success")

    }
    function lowerCase() {
        let newTxt = text.toString().toLowerCase()
        setText(newTxt)

        props.alertFunc("Converted to lowercase","success")

    }
    function clear() {
        setText("Enter Text Here")

        props.alertFunc("Cleared","danger")

    }
    function copy() {
        navigator.clipboard.writeText(text);

        props.alertFunc("Text Copied","primary")
    }
    function removeSpace() {
        let newTxt = text.toString().replace(/\s+/g," ")
        setText(newTxt)

        props.alertFunc("Spaces Removed","success")

        
    }


   
   

    const handleChange = (e) => {
        setText(e.target.value)



    }

    return (
        <div id="txtForm">
            <form >
                <h1 style={{color:props.mode==="light"?"blue":"white"}}> Enter the Text to Make Changes:</h1>
                <textarea value={text} onChange={handleChange} placeholder='Enter Text Here'></textarea>
                <br />
                <button disabled={text.length==0} type="button" className={`btn btn-${props.mode==="light"?"dark":"light"}`} onClick={upperCase} >Change To UpperCase</button>
                <button  disabled={text.length==0} type="button" className={`btn btn-${props.mode==="light"?"dark":"light"}`} onClick={lowerCase} >Change To LowerCase</button>
                <button disabled={text.length==0} type="button" className={`btn btn-${props.mode==="light"?"dark":"light"}`} onClick={removeSpace} >Remove Space</button>
                <button disabled={text.length==0} type="button" className={`btn btn-${props.mode==="light"?"dark":"light"}`} onClick={copy} >Copy</button>
                <button disabled={text.length==0} type="button" className="btn btn-danger" onClick={clear} >Clear</button>

            </form>

            <div id="enhance">        
                {/* Enhancing the document more */}
                <h1 style={{color:props.mode==="light"?"blue":"white"}}>Text Summary</h1>          
                 {/* just 2 curly braces for style */}

                <h6 style={{color:props.mode==="light"?"black":"white"}}>Preview:</h6>
                <p>{text}</p>

                <h6 style={{color:props.mode==="light"?"black":"white"}}>Word Count:</h6>
                <p>{text.split(/\s+/).filter((e)=>{
                    return e.length>0
                }).length}</p>

                <h6 style={{color:props.mode==="light"?"black":"white"}}>Character Count:</h6>
                <p>{text.length}</p>

                <h6 style={{color:props.mode==="light"?"black":"white"}}>Reading Time:</h6>
                <p>{(0.008 * text.length).toFixed(3)} seconds</p>
            </div>
        </div>
    )
}
