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
    res.render("users",{
        username: "Saransh",
        // username2: "Bagga"
        // users:[{username: "Saransh",
        //     age:23},{id:1,username: "Bagga",
        //     age:24}]
    })
})

app.get('/allusers',(req,res)=>{
    // res.render("users",{
    //     users:[{username: "Saransh",
    //     age:23},{id:1,username: "Bagga",
    //     age:24}]
    // })
    const allusers = [
        {name:"Harsh", age:20},
        {name:"Saransh", age:20},
        {name:"Bagga",age:19}
    ];
    res.render('users',{users:allusers});
})

// //userRegistration
// app.use("api/register",require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
});