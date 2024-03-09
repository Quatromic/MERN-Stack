const express = require('express')
const router = express.Router()
const Database = require('../Database/List')
require('dotenv').config()

//Creating a To-do-List task
router.post('/',async (request,_) => {
    const {title,description,deadline} = request.body

    if(title && description && deadline){
        try{    
            const validator = await Database.findOne({Title:title})
            if(validator){
                throw new Error("Already exists")
            }
            else{
                const newTodo = Database.create({
                    Title:title,
                    Description:description,
                    Deadline:deadline
                })
                console.log("Data has been saved in the Database")
            }
        }
        catch(error){
            console.log(error)
        }
    }
})
//Sending the tasks back to the client for view(front-end)
router.get('/send',async (_,response) => {
    try{
        const tasks = await Database.find()
        return response.status(200).send(tasks)
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router