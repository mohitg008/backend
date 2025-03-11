import {config} from "dotenv";
import connectDB from "./db/index.js";

config({
    path: "./env"
})

connectDB()


/* 
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