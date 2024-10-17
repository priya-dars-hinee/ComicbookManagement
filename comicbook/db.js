// const  mongoose=require("mongoose")
import mongoose from "mongoose";


 const connnection=mongoose.connect("mongodb://localhost:27017/comicbook")
.then(() => {
    console.log('connected to Mongodb succeful');
}).catch((err) => {
    console.error(err);
});




// module.exports= connnection;
export default connnection;