//crea una nueva instancia del enrutador de Express y la asigna a la variable router.
const router = require("express").Router()
const User = require("../models/User")
//nos permite metodos para encriptar y desencriptar contraseñas
const CryptoJS = require("crypto-js")
//permite metodos para generar token de acceso
const jwt = require("jsonwebtoken")


// REGISTRARSE
router.post("/register", async (req, res) => {
    try {
      const { username, email, password, isAdmin, img } = req.body;
      const newUser = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
        isAdmin,
        img
      });
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (error) {
      console.log("Error en /register:", error);
      res.status(500).json(error);
    }
  });

//LOGIN
// router.post("/login", async(req, res)=>{
//     try {
//         const user = await User.findOne(
//             {username: req.body.username}
//         )
//         //probamos username
//         //si el usuario no existe
//         !user && res.status(401).json("usuario erroneo")
        
//         //si el usuario existe
//         //desencriptamos la contraseña
//         const hashedPassword = CryptoJS.AES.decrypt(
//             user.password, 
//             process.env.PASS_SEC
//         )
//         const originalPassword  = hashedPassword.toString(CryptoJS.enc.Utf8)
//         const inputPassword = req.body.password
//         //si las contraseñas no coinciden
//         //&& = entonces
//         originalPassword != inputPassword && 
//             res.status(401).json("Contraseña erronea");
//             //console.log(`originalPassword = ${originalPassword} inputPassword = ${inputPassword}`)
//             //res.status(401).json(`originalPassword = ${originalPassword} inputPassword = ${inputPassword}`) 
//         //si las contraseñas coinciden
//         //creamos el token de acceso valido por tres dias
//         const accesToken = jwt.sign(
//             {
//                 id: user._id,
//                 isAdmin: user.isAdmin
//             },
//             process.env.JWT_SEC,
//             {
//                 expiresIn: "3d"
//             }
//         )
//         //desestructuramos el objeto user del documento y lo retornamos como respuesta sin la contraseña
//         const {password, ...others} = user._doc
//         res.status(200).json({...others, accesToken})    
//     } catch (error) {
//         console.log("🚀 ~ file: auth.js:34 ~ router.post ~ error:", error)
//     }
// })

// LOGIN
router.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json("Usuario incorrecto");
      }
  
      const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  
      if (originalPassword !== password) {
        return res.status(401).json("Contraseña incorrecta");
      }
  
      const accesToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );
        //enviar datos sin la contraseña
      const { password: userPassword, ...others } = user._doc;
      res.status(200).json({ ...others, accesToken });
    } catch (error) {
      console.log("Error en /login:", error);
      res.status(500).json(error);
    }
  });




module.exports = router