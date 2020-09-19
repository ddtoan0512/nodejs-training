require('dotenv').config();

const express = require('express');
const app = express();
const port = 6969;

app.post('/', (req, res) => {
    res.json({ username: 'Toan' })
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})

//