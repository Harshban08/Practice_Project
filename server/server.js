const express = require('express');
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors")

//env file config+
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
app.set('view engine','hbs');
const PORT =  5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Working hello');
});

app.get('/home',(req,res)=>{
    res.render("home",{
        username: "Harsh",
        posts: "flana"
    })
})

app.get('/all',(req,res)=>{
    res.render("all",{
        username1: "Saransh",
        username2: "Bagga"
    })
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
});