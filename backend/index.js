const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const connectDB = require('./config/db.js')
const router = require('./routes/index')

const app = express()
app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser())
app.use(express.json())
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     methods : ["POST","GET"],
//     credentials : true
// }))

app.use(cors({
    origin: 'https://ecommerce-mern-stack-application-9srb.vercel.app/',
    methods: ['GET', 'POST'], // Adjust as needed
    credentials: true, // Allow cookies and authorization headers with credentials
  }));
  
 
app.use("/api",router)

const PORT = 4000 || process.env.PORT
connectDB().then(() => {
    app.listen(PORT,()=> {
        console.log("connected to DB")
        console.log("Server is running")
    })

})
module.exports = app
