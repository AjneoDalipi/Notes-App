import { useState } from "react";
import axios from "axios";
import ListNotes from "./ListNotes";

function InputNote() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if(title.length == 0 || description.length == 0){
      alert("You need to feel both fields")
    } else {

      try {
        await axios.post("http://localhost:5000/notes/", {
          description: description,
          title: title,
        });
        document.getElementById("noteDesc").value=''
        document.getElementById("note").value=''
        
      } catch (err) {
        console.log(err);
      }
    }

    

  };

  return (
    <div className="main">
      <div className="app">
        <h1 className="text-center mt-5">Notes Application</h1>
        <p>Enter your notes below</p>
        <form action="post" autoComplete="off">
          <label htmlFor="note" className="form-label">
            Notes :
          </label>
          <input
            type="text"
            className="form-control"
            id="note"
            name="note"
            placeholder="Enter your title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="form-control"
            id="noteDesc"
            name="note"
            rows={3}
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            type="submit"
            className="notesButton"
            id="myButton"
            onClick={submit}
          >
            Add note
          </button>
        </form>
      </div>
      <div className="allnotes">
        <ListNotes />
      </div>
    </div>
  );
}

export default InputNote;
