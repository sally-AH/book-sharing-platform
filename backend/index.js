const express = require('express');
const app = express();
const cors = require('cors'); // fetch data
require("dotenv").config()
const Mangodb = require('./configs/mongodb.connection')
// const authMiddleware = require("./middlewares/auth.middleware")
// Read JSON
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: true}))
// -----------------

const authRouter = require("./routers/auth.route")
app.use("/auth", authRouter)

const userRouter = require("./routers/users.route")
app.use("/users", authMiddleware, userRouter)

const bookRouter = require("./routers/book.route")
app.use("/books", authMiddleware, bookRouter)


// -----------------
app.listen(8000, (err) =>{
    if(err){throw err}
    console.log('app listening on port 8000!');
    Mangodb()
  });
  