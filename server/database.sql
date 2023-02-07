CREATE DATABASE nodeapp;

CREATE TABLE notes(
    notes_id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    description VARCHAR(200)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(200),
    email VARCHAR(100),
    password VARCHAR(200),
    UNIQUE (email)
);