const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//ROUTES//

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