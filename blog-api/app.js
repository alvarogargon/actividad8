const express = require('express');
const cors = require('cors');

const postsRoutes = require('./routes/posts');
const autoresRoutes = require('./routes/autores');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRoutes);
app.use('/api/autores', autoresRoutes);

app.listen(3000, () => {
  console.log('Puerto 3000');
});