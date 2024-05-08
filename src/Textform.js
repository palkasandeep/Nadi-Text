import React, { useState } from "react";

const Textform = (props) => {
  const [text,setext]=useState('');
  const toupper=()=>{
      let newtext=text.toUpperCase();
        setext(newtext);
        props.showAlert("converted to upper case","success");

  }
  const tolower=()=>{
    let newtext=text.toLocaleLowerCase();
      setext(newtext);
      props.showAlert("converted to lower case","success");


}
  const handleonchange=(event)=>{
    setext(event.target.value);
}
 const handlecopy=()=>{
  var text=document.getElementById('mybox');
  text.select();
  navigator.clipboard.writeText(text.value);

 }
 const Cleartext=()=>{
      setext('');
 }
 const Removespace=()=>{
   let newText=text.split(/[ ]+/);
   setext(newText.join(" "));
 }

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          onChange={handleonchange}
          value={text}
          rows="8"
        ></textarea>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
      <button className="btn btn-primary" onClick={toupper}>Covert to upper case</button>
      <button className="btn btn-primary" onClick={tolower}>Covert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handlecopy}>Copy</button>
     
      <button className="btn btn-primary mx-3" onClick={Removespace}>Adjustspace</button>
      <button className="btn btn-primary mx-3" onClick={Cleartext}>clear</button>
    </div>
    </div>
    <div className="container my-2">
      <h1>your text summary</h1>
      <p> {text.split(" ").length}words and the no.of chars {text.length}</p>
      <p>{0.08*text.split(" ").length}minutes</p>
    </div>
    <div className="container mx-3">
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
   
  
  );
};

export default Textform;
