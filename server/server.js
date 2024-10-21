const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware.errHandler");
const cors = require("cors")

connectDb();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Working');
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`);
});