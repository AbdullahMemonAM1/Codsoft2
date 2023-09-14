import React, { useState } from 'react'

export const AddTodo = (props) => {


const [desc,setDesc]=useState('');
const [title,setTitle]=useState('');

const setTitlef= (e) => {
    setTitle(e.target.value);

  }
const submit=(e)=>{
    e.preventDefault();
    if(!title|| !desc){
        alert("title or desc not defined")
    }
    {props.addTodo(title,desc)}


}



        return (
            <div className='container my-3'>
                <h3>Add a Todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Todo Title</label>
                        <input type="text" onChange={setTitlef} className="form-control" id="title" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo description</label>
                        <input type="text" onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                    </div>
                    
                    <button type="submit" className="btn btn-success">Add Todo</button>
                </form>

            </div>
        )
    }
