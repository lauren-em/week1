const express = require('express');
const app = express();

app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const songs = [
  {
    id: 1,
    title: 'Super Trouper',
    artist: 'ABBA',
  },
];

app.use(express.static('build'));

app.get('/', (req, res) => {
  // serve my react app
});

app.get('/api/songs', (req, res) => {
  console.log('GET /api/songs');
  res.send(songs);
});

app.post('/api/songs', (req, res) => {
  const data = req.body;
  console.log('POST /api/songs', data);
  data.id = songs.length + 1;
  songs.push(data);
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
