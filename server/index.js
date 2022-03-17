require('dotenv').config({path: '../.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

console.log('dotenv: ', process.env.DBPORT);

const port = process.env.DBPORT || 5001;


app.get('/bosses/:map', async (req, res) => {
  try {
    console.log('In GET bosses; req.params: ', req.params);
    const { map } = req.params;
    const bossData = await pool.query('SELECT * FROM bosses WHERE map = $1', [map]);
    res.json(bossData);
  } catch (err) {
    console.error(err.message);
  }
})




app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});
