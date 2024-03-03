const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("mongoDB Atlas Connected successfully with pfServer ");
}).catch((reason)=>{
    console.log(reason);
    console.log("mD connection failed");
})