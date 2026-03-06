const bookSchema = require("../models/BookModel")

const getAllBooks = async(req,res) => {
    const allBooks = await bookSchema.find()
    res.json({
        message:"All Books",
        data:allBooks
    });
};

const getBookById = async(req,res) =>{
    const foundBook = await bookSchema.findById(req.params.id);
    if(foundBook){
        res.json({
        message:"Book Is Found..",
        data:foundBook,
    });  
    }else{
        res.json({
            message:"Not Founded.."
        })
    }
}

const addBook = async(req,res)=>{
    try{
        const savedBook = await bookSchema.create(req.body);
        res.status(201).json({
            message:"Data Saved..",
            data:savedBook,
        });
    }catch(err){
        res.status(500).json({
        message:"error while creating product",
        err:err
    });
};
}

const deleteBook = async(req,res)=>{
    const deleteBookObj = await bookSchema.findByIdAndDelete(req.params.id)
    if(deleteBookObj){
        res.status(200).json({
            message:"delete record Sucessfully..",
            data:deleteBookObj
        });
    }else{
         res.status(200).json({
            message:"not delete record..",
        })
    }
}
const updateBook = async(req,res) => {
    const updateObj = await bookSchema.findByIdAndUpdate(req.params.id,req.body,{new:true},)
    res.status(200).json({
        message:"data updated..",
        data:updateObj
    })
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    deleteBook,
    updateBook
}
