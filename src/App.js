import './index.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <h1>Notes Application</h1>
        <p>Enter your notes below</p>
        <div className='formHolder'>
          <div className="mb-3">
            <label htmlFor="note" className='form-label'>Notes :</label>
            <input type='text' className='form-control' id='note' name='note' placeholder='Enter your notes'/>
            <br />
            <button type='button' className='notesButton' id='myButton'>Add note</button>
          </div>
        </div>
    </div>
  );
}

export default App;
