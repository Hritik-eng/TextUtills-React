import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //text = "new text"; // Wrong way to change the state
  //setText("new text"); //  correct way to change the state
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let txt = text.toUpperCase();
    setText(txt);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let txt = text.toLowerCase();
    setText(txt);
    props.showAlert("Converted to lowercase!","success");
  };

  const handleOnChange = (e) => {
    // console.log("on Change");
    setText(e.target.value); //or we can just use setText(e.value).
  };

  const handleOnClear = () => {
    setText(" ");
    props.showAlert("cleared!","success");
  };

  const handleOnCopy = () => {
    /* Get the text field */
    var copyText = document.getElementById("myBox");
    /* Select the text field */
    copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    // alert("Copied the text: ");

    props.showAlert("Copied to clickboard!","success");
  };

  const handleOnRemove = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra white space!","success");
  };

  return (
    <>
      <div className="container"  style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-4"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743"
            }} /*declaring a object inside the html thats why there is two curly braces first one if for writing the javascript inside the html and other one is the for javascript object. and we know very well that bable is render the javascript code into the html code */
          ></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick} >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-1 mx-1"
          onClick={handleOnClear}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary my-1 mx-1"
          onClick={handleOnCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary my-1 mx-1"
          onClick={handleOnRemove}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>Your text summaary</h1>
        <p>
          <b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> minutes to read
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text:"Enter something in the textbox to preview to here:"}</p>
      </div>
    </>
  );
}
