const express = require('express')
const router = express.Router()
const Database = require('./../Database/List')

router.patch('/',async (request,response) => {
    const {id,title,description,deadline} = request.body
    console.log(request.body)
    if(id){
        try{
            const item = await Database.findById({_id:id})
            if(item){
                if(title){
                    if(!item.Title == title){
                        return item.updateOne({_id:id},{$set:{Title:title}})
                    }
                }
                if(description){
                    if(!item.Description == description){
                        return item.updateOne({_id:id},{$set:{Description:description}})
                    }
                }
                if(deadline){
                    if(!item.Deadline == deadline){
                        return item.updateOne({_id:id},{$set:{Deadline:deadline}})
                    }
                }
            }
        }
        catch(error){
            console.log(error)
        }
    }
})

module.exports = router