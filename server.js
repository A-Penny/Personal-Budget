const express = require('express');
const app = express();
const morgan = ('morgan');
const bodyParser = require('body-parser');

app.use(morgan('tiny'));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;



app.listen(port, () => console.log(`listening on port ${port}`));