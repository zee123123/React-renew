//const http = require("http");
const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

// homepage request
app.get("/", (request, response) => {
  response.send("<h1>Hello Server</h1>");
});

// get all notes request
app.get("/notes/", (request, response) => {
  response.json(notes);
});

// get specific note (by id) request
app.get("/notes/:id", (request, response) => {
  console.log(request.params.id);
  const id = request.params.id;
  const note = notes.find((note) => note.id == id);
  response.send(note);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
