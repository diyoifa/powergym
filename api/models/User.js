//importamos el manejador de BD
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String, required: true 
       },
        isAdmin: {
            type: Boolean,
            default: false
        },
        img:{
            type: String,
            default: "https://th.bing.com/th/id/OIP.ymEUbl8s2t2yzvdNqwOCyAHaHa?pid=ImgDet&rs=1" 
        },
        fullname:{
            type: String
        },
        phone:{
            type: String
        },
        address:{
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", UserSchema)