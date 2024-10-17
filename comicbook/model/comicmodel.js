// const mongoose=require('mongoose')
import mongoose from "mongoose"

const comicSchema=new mongoose.Schema(
    {
        bookname:{
            type:String,
            required:true
        },
        authorname:{
            type:String,
            required:true
        },
        yearofpub:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        Discount:{
            type:Number,
            required:true
        },
        numberofpage:{
            type:Number,
            required:true
        },
        condition:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }
)
// module.exports=mongoose.model('Comic',comicSchema)
const comicbook=mongoose.model('Comic',comicSchema)
export default comicbook