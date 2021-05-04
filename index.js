const express = require('express');
const app = express();

const PORT = 4000;

const corsMiddleWare = require('cors')
app.use(corsMiddleWare);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
