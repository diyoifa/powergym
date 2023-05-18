const jwt = require("jsonwebtoken")

//validar token de acceso para cualquier usuario
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    //console.log("🚀 ~ file: verifyToken.js:6 ~ verifyToken ~ authHeader:", authHeader)
    //validar si hay un token de acceso
    if(authHeader) {
        //res.status(200).send("body")
        //tomar el string a partir del primer espacio
        const token = authHeader.split(" ")[1]
        //verificamos que el tokens sea valido
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json("token no valido")
            req.user = user
            next()
        })    
    } else{
        return res.status(401).json("No estas autenticado")
    }   
}

//validar si puede realizar una accion
const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("no puedes realizar esta accion")
        }
    })
}

//validar que sea admin

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, ()=>{
        //si es admin
        if(req.user.isAdmin){
            //dar acceso
            //continua con la funcion router
            next()
        }else{
            res.status(403).json("No puedes realizar esta accion")
        }
    })
}

//exportamos nuestras funciones
module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}