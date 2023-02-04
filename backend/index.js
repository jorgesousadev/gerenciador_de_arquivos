const express = require("express");
const cors = require('cors');

const app = express();

global.__basedir = __dirname;

const conn = require("./db/conn");

const ArquivoRoutes = require("./routes/ArquivoRoutes");

app.use(cors({ credentials: true, origin: '*' }))

app.use(express.urlencoded({ extended: true }));

app.use('/', ArquivoRoutes);

conn
  .sync(/*{force: true}*/)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
