const express = require('express');
const app = express();

app.use(express.json());

const songs = [
  {
    id: 1,
    title: 'Super Trouper',
    artist: 'ABBA',
  },
];

app.get('/api/songs', (req, res) => {
  console.log('GET /api/songs');
  res.send({ songs: songs });
});

app.post('/api/songs', (req, res) => {
  const data = req.body;
  console.log('POST /api/songs', data);
  data.id = songs.length + 1;
  songs.push(data);
  res.send(data);
});

app.get('/', (req, res) => {
  console.log('GET /');
  res.send('<h1>hello aws</h1>');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
