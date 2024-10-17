// const comicmodel = require("../model/comicmodel");
import comicbook from "../model/comicmodel.js";

 export const createcomicbook = async (req, res) => {
  try {

    const {bookname,
        authorname,
        yearofpub,
        price,
        Discount,
        numberofpage,
        condition,
        description,}=req.body

    const createcomic = await comicbook.create({
      bookname,
      authorname,
      yearofpub,
      price,
      Discount,
      numberofpage,
      condition,
      description,
    });
    res.status(201).send({
        createcomic,
        success:true,
        message:'Created Book📔'
    })



  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "nope try again",
    });
  }
};

 export const getbook=async(req,res)=>{
    try {
        const id=req.params.id;
        const comicexist=await comicbook.findById(id);
        if(!comicexist){
            return res.status(404).json({
                mesg:'Book is not found 🙅‍♂️'
            })
        }
        res.status(200).json(comicexist)
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}

 export const updatecomic=async(req,res)=>{
  try {
    const id=req.params.id;
    const comicup=await comicbook.findById(id);
    if(!comicup){
      return res.status(404).json({meg:"Book not found"});
    }
    const update=await comicbook.findByIdAndUpdate(id,req.body,{
      new:true
    });
    res.status(200).json(update)
  } catch (error) {
    res.status(400).json({ errormessage: error.message });
  }
  
}

export const getbooks=async(req,res)=>{
  try {
    const cbook=await comicbook.find();
    if(!cbook || !cbook.length ===0){
      return  res.status(404).json({mesg:'NO BOOK FOUND'})
    }
    res.status(200).json(cbook);
  } catch (error) {
    res.status(400).json({errormessage:error.message})
  }
}


export const deletebook = async (req, res) => {
  try {
  
      const dbook = await comicbook.findByIdAndDelete(req.params.id);
      if (!dbook) {
          return res.status(404).json({ message: "Book not found" });
      }
      return res.status(204).send(); 
  } catch (error) {
      res.status(400).json({ errorMessage: error.message });
  }
};
