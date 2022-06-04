const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());


const port = process.env.PORT || 3000;

const apiRouter = require('./api/api');
app.use('/api', apiRouter);

app.listen(port, () => console.log(`listening on port ${port}`));