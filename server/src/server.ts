import express from 'express';

const port = 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Spellbook Shelf Server is on');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Spellbook Shelf Server app listening at http://localhost:${port}`
  );
});
