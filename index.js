const express = require('express');
const app = express();
const port = 3000;

// use middleware into the app 
// inbuilt middleware : use to parse or convert json data
app.use(express.json());

// middleware : logging, authentication, validation 

const loggingMiddleware = function(req, res, next){
    console.log('Logging');
    next();
}

const authMiddleware = function(req, res, next){
    console.log('Authentication');
    next();
}

const validationMiddleware = function(req, res, next){
    console.log('Validation');
    next();
}

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});