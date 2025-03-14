import {config} from "dotenv";
import connectDB from "./db/index.js";

config({
    path: "./env"
})

//we can make const = process.env.PORT || 8000 variable and use it instead looks clean to me

connectDB()  //calling async function it returns promise
.then(()=>{
    
    app.on("error",(error)=>{                         //listening to errors
        console.log(`Error : `,error);
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err),()=>{
    console.log(`MONGO db connection failed !!!`,err);
})









/* //this is for all the connection code in src -> index.js file 
const app = express(); 

;(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        app.on("error",(error)=>{
            console.log("Error :",error);
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error : "+error);
        throw err;
    }
})() */