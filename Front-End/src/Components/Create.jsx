import { useState } from "react"

const Create = () => {
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
        event.preventDefault()
        console.log(title + " : " + description + " : " + deadline)
        if(title && description && deadline){
            const values = {title,description,deadline}
            try{
                await fetch('http://localhost:4000/api/v1/item',{
                    method:"POST",
                    headers:{
                        "Content-type":'Application/json'
                    },
                    body:JSON.stringify(values)
                })
            }
            catch(error){
                console.log(error)
            }
        }
    }

    return (
        <>
            <form id='createForm' method='post' onSubmit={event => submitHandler(event)}>
                <label htmlFor="title">Title: </label><br/>
                <input id="title" name="title" type="text" placeholder="Example" value={title} onChange={(event) => titleHandler(event)}/><br/>
                <label htmlFor="description">Description: </label><br/>
                <input type='text' id="description" placeholder="Enter some text here to describe the task" name="descritpion" value={description} onChange={(event) => descriptionHandler(event)}/><br/>
                <label>Deadline</label><br/>
                <input type='date' value={deadline} id='deadline' name='deadline' onChange={(event) => deadlineHandler(event)}/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Create