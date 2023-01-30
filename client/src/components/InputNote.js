import { Fragment, useState } from "react"
import axios from 'axios';

function InputNote(){
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const submit = async e =>{
    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/notes/", {
        description: description,
        title: title
      })
    } catch (err) {
      console.log(err);
    }
  }

return(
  <Fragment>
    <div className="container">
      <div className="App">
        <h1>Notes Application</h1>
        <p>Enter your notes below</p>
        <div className="formHolder">
          <form action="post" className="mb-3">
            <label htmlFor="note" className="form-label">Notes :</label>
            <input type="text" className="form-control" id="note" name="note" placeholder="Enter your title" 
            onChange= {e => {setTitle(e.target.value)}}  />

            <textarea className="form-control" id="noteDesc" name="note" rows={3} placeholder="Description"
            onChange= {e => {setDescription(e.target.value)}}/>
            <button type="submit" className="notesButton" id="myButton" onClick={submit}>
              Add note
            </button>
          </form>
        </div>
      </div>
    </div>
  </Fragment>
    )
  } 

export default InputNote;