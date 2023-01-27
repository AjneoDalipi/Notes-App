import './index.css';

function App() {

  return (
    <div className="mainpage">
      <div className="App">
        <h1>Notes Application</h1>
        <p>Enter your notes below</p>
        <div className='formHolder'>
          <form action='post' className="mb-3">
            <label htmlFor="note" className='form-label'>Notes :</label>
            <input type='text' className='form-control' id='note' name='note' placeholder='Enter your title' />
            <textarea className='form-control' id='noteDesc' name='note' rows={3} placeholder='Description' />
            <button type='submit' className='notesButton' id='myButton'>Add note</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
