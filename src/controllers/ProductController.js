const productSchema = require("../models/ProductModel");

//api
const getAllProducts = async (req, res) => {
  //db query
  const allProducts = await productSchema.find();
  res.json({
    message: "all products",
    data: allProducts,
  });
};

const getProductById = async (req, res) => {
  //req.params.id
  //const foundProduct = await productSchema.find({_id:req.params.id}) //[]
  const foundProduct = await productSchema.findById(req.params.id); //{}
  if (foundProduct) {
    res.json({
      message: "product found",
      data: foundProduct,
    });
  } else {
    res.json({
      message: "product not found",
    });
  }
};

const addProduct = async (req, res) => {
//console.log("body...",req.body)
  try{
    const savedProduct = await productSchema.create(req.body);
    res.status(201).json({
      message: "product saved",
      data: savedProduct,
    });
  }catch(err){
    res.status(500).json({
      message:"error while creating product",
      err:err
    });
}
}

const deleteProduct = async (req, res) => {
  //delete from products where id = ?
  //db.products.removeOne({_id:?})
  //productSchema.removeOne({_id:req.params.id})
  //productSchema.findByIdAndDelete(req.params.id)

  const deletedProductObj = await productSchema.findByIdAndDelete(
    req.params.id,
  );
  if (deletedProductObj) {
    res.status(200).json({
      message: "product deleted",
      data: deletedProductObj,
    });
  } else {
    res.status(200).json({
      message: "product not found to delete",
    });
  }
};

const updateProduct = async(req,res)=>{
  const updateObj = await productSchema.findByIdAndUpdate(req.params.id,req.body,{new:true},)
  res.status(200).json({
    message:"data updated...",
    data:updateObj
  })
}

const searchProduct = async(req,res)=>{
    const searchParam = req.query;
    console.log("req.query",searchParam)

      res.json({
        message:"searching...."
      })
}
const addColor = async(req,res)=>{
    try{
      const addNewColor = await productSchema.findByIdAndUpdate(req.params.id,{$push:{productColor:req.body.productColor}},{new:true})
      res.status(200).json({
        message:"add new colors...",
        data:addNewColor
      })
    }catch(err){
      res.status(500).json({
        message: err.message
    });
    }
}
const removeColor = async(req,res)=>{
  try{
    const removeColorObj = await productSchema.findByIdAndUpdate(req.params.id,{$pull:{productColor:req.body.productColor}},{new:true})
      res.status(200).json({
        message:"color removed..",
        data:removeColorObj
      })
    }catch(err){
      res.status(500).json({
        message: err.message
    });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct,
    searchProduct,
    addColor,
    removeColor

}