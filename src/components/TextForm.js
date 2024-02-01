import React, {useState} from 'react'
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


export default function TextForm(props) {
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleOnChange = (e)=>{
        setText(e.target.value)
    }

    const handleSpeakClick = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.pitch = 0;
        msg.rate = 1;
        msg.lang = 'en';
        msg.voice = window.speechSynthesis.getVoices()[2];
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text to Speech is Active", "success")
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied!", "success")
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Text Area has been cleared!", "success")
    }

    const handleRemovePunctuationClick = ()=>{
        // eslint-disable-next-line
        let punctuations = /[\.,?!;:]/g;
        setText(text.replace(punctuations, ""));
        props.showAlert("All punctuations has been removed!", "success")
    }

    

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
      <form className='mt-3 mb-3'>
        {/* We need to use OnChange event so that we are able to edit the text inside as we are already giving it a const value */}
    <textarea value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#0c0c0c', color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="10"></textarea>
    </form>
    <button disabled={text.length ===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length ===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length ===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleSpeakClick}>Read Text</button>
    <button disabled={text.length ===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleRemovePunctuationClick}>Remove Punctuations</button>
    <button disabled={text.length ===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length ===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container mt-5" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split(/\s+/).filter((element) => element.length !== 0).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> minutes to read this for an average person</p>
        <h2>Preview</h2>
        <p>{text.length === 0?'Nothing to preview':text}</p>
    </div>
    </>
  )
}

// To know more about to this Read about Hooks in React
// SetText is a state which we set to an component so that we can change it later.
// We don't change variable data like we do in JS by reusing them and changing them we use Set Text
//const [text, setText] = useState('Enter text here'); So here we are making a const variable called "text" and then calling a function called setText which is predefined.
// And then when we need to update the value in it we call the function setText and in it's parameters we use the value we need to put in.
// And we assign it's value to something we need at like this textarea "textarea value={text}"