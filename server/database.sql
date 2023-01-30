CREATE DATABASE nodeapp;

CREATE TABLE notes(
    notes_id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    description VARCHAR(200)
);