const express = require('express')
const router = express.Router()
const Database = require('./../Database/List')

router.delete('/',async (request,response) => {
    console.log("got called again")
    const {id} = request.body
    console.log(request.body)
    if(id){
        try{
            const item = await Database.findById({_id:id})
            if(item){
                return item.deleteOne({_id:id})
            }
            else{
                return response.status(404).send("Item could not be found")
            }
        }
        catch(error){
            console.log(error)
        }
    }
})

module.exports = router