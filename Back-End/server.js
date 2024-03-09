const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const body_parser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(body_parser.urlencoded({extended:false}))

const create_viewRoute = require('./Routes/Create-view')
const updateRoute = require('./Routes/Update')
const deleteRoute = require('./Routes/Delete')

app.use('/api/v1/item',create_viewRoute)
app.use('/api/v1/update',updateRoute)
app.use('/api/v1/delete',deleteRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log("Server and Database are up and running")
        })
    })
    .catch(error => {
        console.log(error)
    })