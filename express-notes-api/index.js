const data = require('./data.json');
const express = require('express');
const app = express();
const port = 3000;
const write = require('./write');
const fs = require('fs');
const path = './data.json';

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.json(data);
}
);

app.get('/api/notes/:id', (req, res) => {
  const noteAddress = req.params.id;
  if (noteAddress < 1) {
    res.status(400).json('error: must be a positive integer');
  } else if (!data.notes[noteAddress]) {
    res.status(404).json(`error: cannot find note with id: ${noteAddress}`);
  }
  res.status(200).json(data.notes[noteAddress]);
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (note.content === undefined) {
    res.status(400).json({ error: 'content is required' });
  }
  const id = data.nextId;
  note.id = data.nextId;
  data.notes[id] = note;
  data.nextId++;
  write(path, data);
  if (!fs.existsSync(path)) {
    res.status(500).json({ error: 'an unexpected error occured.' });
  }
  res.status(201).json(note);

});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = req.params.id;
  if (Number(deleteId) < 1) {
    res.status(400).json({
      error: 'must be a positive number',
    });
  } else if (data.notes[deleteId] === undefined) {
    res.status(404).json({ error: 'cannot find that note' });
  }
  delete data.notes[deleteId];
  write(path, data);
  if (!fs.existsSync(path)) {
    res.status(500).json({ error: 'an unexpected error occured.' });
  }

  res.sendStatus(204);
});

app.put('/api/notes/:id', (req, res) => {
  const updId = req.params.id;
  if (updId < 1) {
    res.status(400).json('error: must be a positive integer');
  } else if (!data.notes[updId]) {
    res.status(404).json('error: cannot find note with that id');
  } else {
    const note = req.body;
    if (note.content === undefined) {
      res.status(400).json({ error: 'a note is required' });
    } else {
      note.id = updId;
      data.notes[updId] = note;
      if (fs.existsSync(path)) {
        write(path, data);
        res.status(200).json(note);
      } else {
        res.status(500).json({ error: 'an unexpected error occured.' });

      }
    }
  }
});

app.listen(port, () => {
  console.log(`express server listening on port: ${port}`);
});

/* me getting roasted in class notes
the two gets are out of order - more specific should be higher
first get supposed to return array
make sure to check if there's a conversion to number for get id
delete was better than get for error checking
convert to number
maybe separate function that gets id from request and have it do conversion to #, explicitly cehck if number or nan, if so, return error
res sendstatus 204 will alays be bad
need return for 500 status and 404 status in delete
every time you return an error you need to use return
put all your errors at top with return statements after each one
robert has a problem with line 1 but we fix it during databases

*/
