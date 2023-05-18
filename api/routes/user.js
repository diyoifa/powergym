//importamos el esquema
const User = require("../models/User")
const router = require("express").Router()
//usamos require para importar modulos
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")

//Testear servidor
/*
//probando metodo get
router.get("/usertest",(req, res)=>
    res.send("testeo correcto")    
)

//probando metodo post
router.post("/userPost", (req, res)=>
    {
        const username = req.body.username
        res.status(200).send(username)
    }
)
*/


//ELIMINAR UN USUARIO
router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    try {
        const user =  await User.findOneAndDelete(req.params.id)
        res.status(200).json(`usuario eliminado correctamente: ${user.username}`)
    } catch (error) {
        console.log("error")
        res.status(500).json(error)
    }
})

//OBTENER TODOS LOS USUARIOS
router.get("/", verifyTokenAndAdmin, async(req, res)=>{
    const query = req.query.new
    try {
        //si query es true solo retornar 5 usuarios
        /*
            sort({_id: -1}): Es un método que ordena los documentos según el campo especificado en orden descendente. En este caso, el campo _id se utiliza para ordenar los documentos, y el valor -1 se utiliza para indicar que se debe ordenar en orden descendente.
            limit(5): Es un método que limita el número de resultados devueltos por la consulta a 5 documentos.
        */
        const users = query 
        ? await User.find().sort({_id:-1}).limit(5)
        //sino retornar todos
        : await User.find()
        //retornamos un json con todos los usuarios
        res.status(200).json(users)
    } catch (error) {
        console.log("🚀 ~ file: user.js:41 ~ router.get ~ error:", error)
        res.status(500).json(error)
    }
})

//OBTENER USUARIOS POR MES
router.get('/stats', verifyTokenAndAdmin, async(req, res)=>{
  
    //limitar solo al año anterior
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
    try {
        const data =  await User.aggregate([
                        //mayor que el año anterior    
            {
                $match: {
                    createdAt: {$gte: lastYear}
                }
            },
            {
                $project: {
                        //guardar en month el valor de $month en createdAt
                    month: {$month: '$createdAt'}
                }      
            },
            {   //agrupar usuarios por mes 
                $group: {
                    _id: "$month",
                    //sumar cada registro
                    total: {$sum: 1}
                }
            }      
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router