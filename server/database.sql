CREATE DATABASE nodeapp;

CREATE TABLE notes (
    notes_id SERIAL PRIMARY KEY,
    description VARCHAR(200)
);