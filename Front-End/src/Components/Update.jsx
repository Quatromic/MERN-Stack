import { useState } from "react"
import { IdProvider,useIdContext } from "./Body"

const Update = () => {
    const idContext = useId()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [deadline,setDeadline] = useState(Date())

    const titleHandler = (event) => {
        setTitle(event.target.value)
    },descriptionHandler = (event) => {
        setDescription(event.target.value)
    },deadlineHandler = (event) => {
        setDeadline(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventdefault()

        let Content = []
        if(title){
            Content.push(title)
        }
        if(description){
            Content.push(description)
        }
        if(deadline){
            Content.push(deadline)
        }

        try{
            await fetch('http://localhost:4000/api/v1/update',{
                method:'PATCH',
                headers:{
                    'Content-type':'Application/json'
                },
                body:() => {
                    return Content.forEach((value) => {
                        return JSON.stringify(value)
                    })
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <form id='updateForm' onSubmit={event => submitHandler(event)}>
            <h1>Update Form</h1>
            <label htmlFor="title">Title: </label><br/>
            <input id="title" name="title" type="text" value={title} onChange={(event) => titleHandler(event)}/><br/>
            <label htmlFor="description">Description: </label><br/>
            <input type='text' id="description" name="descritpion" value={description} onChange={(event) => descriptionHandler(event)}/><br/>
            <label>Deadline</label><br/>
            <input type='date' value={deadline} id='deadline' name='deadline' onChange={(event) => deadlineHandler(event)}/><br/>
            <button>Submit</button>
        </form>
    )
}

export default Update