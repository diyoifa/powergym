const Product = require("../models/Product")
const {verifyTokenAndAdmin} = require("./verifyToken")
const router = require("express").Router()

//CREAR UN PRODUCTO
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        console.log("🚀 ~ file: product.js:12 ~ router.post ~ error:", error)
        res.status(500).json(error)
    }
})

//OBTENER TODOS LOS PRODUCTOS
router.get("/", async(req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log("🚀 ~ file: product.js:24 ~ router.get ~ error:", error)
        res.status(500).json(error)
    }
})

//OBTENER UN PRODUCTO
router.get("/:id", async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        console.log("🚀 ~ file: product.js:35 ~ router.get ~ error:", error)
        res.status(500).json(error)
    }
})

//MODIFICAR UN PRODUCTO
router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            // id producto a modificar
            req.params.id,
            //datos para modificar
            {
                $set: req.body,
            },
            //devolver version nueva despues del cambio
            {new: true}
        )
        res.status(200).json(updatedProduct)
    } catch (error) {
        console.log("🚀 ~ file: product.js:34 ~ router.put ~ error:", error)
        res.status(500).json(error)
    }
})

//ELIMINAR UN PRODUCTO
router.delete("/find/:id", verifyTokenAndAdmin, async(req, res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(`Producto eliminado correctamente: ${product.title}`)
    } catch (error) {
        console.log("🚀 ~ file: product.js:65 ~ router.get ~ error:", error)
    }
})


module.exports = router