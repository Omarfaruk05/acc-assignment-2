const mongoose = require("mongoose");
const dotenv = require('dotenv').config();


const app = require("./app");


//databse connection
mongoose.connect(process.env.ATLAS_URI).then(()=> {
    console.log(`Databse connection is successfull`);
});

//server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})