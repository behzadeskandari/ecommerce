const express = require("express");
const  mongoose = require("mongoose");

const morgan = require("morgan");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require('express-validator');


require("dotenv").config();
//import routes 
const userRoutes = require('./routes/user');



//app
const app = express();

//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'));


///middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser);
app.use(expressValidator());


//Routes middleware
app.use('/api',userRoutes);


const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

