import { useEffect, useState,createContext, useContext,useId } from "react"
import { Link } from "react-router-dom"

export const IdProvider = createContext(10)

const Body = () => {
    const [list,setList] = useState([])
    const [id,setId] = useState('')

    const fetcher = async () => {
        await fetch('http://localhost:4000/api/v1/item/send',{
            method:"GET"
        })
        .then(response => {
            if(response){
                return response.json()
            }
            else{
                console.log("No data gotten")
                throw "No data or rather no workout made"
            }
        })
        .then(data => {
            if(data){
                setList(data)
                console.log(data)
            }
            else{
                throw "No data is inside here"
            }
        })
    }

    useEffect(() => {
        const caller = async () => {
            const Func = await fetcher()
        }
        caller()
        // let tasks = document.getElementById("task")
        // tasks.classList.add("incomplete")
    },[])


    const deleter = async (id) => {
        try{
            await fetch('http://localhost:4000/api/v1/delete',{
                method:"DELETE",
                headers:{
                    'Content-type':'Application/json'
                },
                body:JSON.stringify({id:id})
            })
            .then(() => {
                console.log("Request sent for deletion")
            })
            .catch(error => { console.log(error) })
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div id='container'>
            {list && list.map((task,index) => (
                <div id="task" key={index}>
                    <h1 id='title'>{task.Title}</h1>
                    <p id='desc'>{task.Description}</p>
                    <p id='deadline'>Deadline: <u>{task.Deadline}</u></p>
                    <div id='done'>
                        <input id='Done' type='radio' name='group'/>
                        <label>Done</label>
                        <input id='progress' type='radio' name='group'/>
                        <label>In progress</label>
                    </div>
                    <div id="options">
                        <button onClick={() => setId(task._id)}><Link to='/update'>Update</Link></button>
                        <button onClick={() => deleter(task._id)}>Delete</button>
                    </div>
                </div>
            ))}
            {console.log("Id: ",id)}
        </div>
    )
}

export const useIdContext = () => {
    return useContext(IdProvider)
}

export default Body