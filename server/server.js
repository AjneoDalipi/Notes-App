const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const bcrpyt = require("bcrypt");

app.use(cors());
app.use(express.json());


//ROUTES//

//create a user

const users = []

app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );
    res.json(newUser.rows[0]);
  } 
    
  catch (err) {
    console.error(err.message);
  }
});

app.post('/login', async (req, res) => {
  const user = users.find(user => user.email = req.body.email)
  if( user == null) {
    return res.status(400).send('Cannot find user') 
  } 
  try {
   if (await pool.query(req.body.password, user.password)){
     res.send('success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})


// get a user

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//create a note

app.post("/notes", async (req, res) => {
  try {
    const { description, title } = req.body;
    const newNote = await pool.query(
      "INSERT INTO notes (description, title) VALUES ($1, $2) RETURNING *",
      [description, title]
    );
    res.json(newNote.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get a note


app.get("/notes", async (req, res) => {
  try {
    const allNotes = await pool.query("SELECT * FROM notes");
    res.json(allNotes.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await pool.query("SELECT * FROM notes WHERE notes_id = $1", [
      id,
    ]);
    res.json(note.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update a note

app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description, title } = req.body;
    const updateNote = await pool.query(
      "UPDATE notes SET description = $1, title = $2 WHERE notes_id = $3",
      [description, title, id]
    );
    res.json("Note updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a note

app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await pool.query(
      "DELETE FROM notes WHERE notes_id = $1",
      [id]
    );
    res.json("Note was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});