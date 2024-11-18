const express = require('express');
const app = express();
const port = 3000;

// use middleware into the app 
// inbuilt middleware : use to parse or convert json data
app.use(express.json());

// middleware : logging, authentication, validation 

// creation of a middleware 
const loggingMiddleware = function(req, res, next){
    console.log('Logging');
    next();
}
app.use(loggingMiddleware);

const authMiddleware = function(req, res, next){
    console.log('Authentication');
    next();
}
app.use(authMiddleware);

const validationMiddleware = function(req, res, next){
    console.log('Validation');
    next();
}
app.use(validationMiddleware);

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});