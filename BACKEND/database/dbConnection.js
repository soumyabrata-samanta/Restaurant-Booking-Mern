import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("Connected to database successfully!");
    }).catch(err=>{
        console.log(`error occurred while connecting to database! ${err}`);
    })
}