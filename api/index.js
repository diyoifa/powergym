//importaciones
const express = require("express")
const app = express()
//base de datos 
const mongoose = require("mongoose")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("Conectado a la BD exitosamente wiiii🚀🚀"))
    .catch((err)=>console.log("Error al conectarse a la base de datos🥴"))

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.listen(
    process.env.PORT || 5001, ()=>console.log("Backend corriendo en el servidor 5001")
)
