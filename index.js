const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sensor3', (req, res) => {
  res.send({sensor3: 1000});
});
//
app.listen(port, ()=>{
  console.log('Welcome to the app!');
  console.log(`Started on http://localhost:${port}`)
});
