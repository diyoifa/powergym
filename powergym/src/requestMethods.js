import axios from "axios"

const BASE_URL = "http://localhost:5001/api/"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user
const currentUser = user && JSON.parse(user).currentUser

const TOKEN = currentUser?.accesToken
//console.log("🚀 ~ file: requestMethods.js:9 ~ TOKEN:", TOKEN)

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})