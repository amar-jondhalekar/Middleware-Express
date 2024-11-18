const express = require('express');
const app = express();
const port = 3000;

// use middleware into the app 
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});