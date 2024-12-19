import { useState } from "react"
import { db } from '../firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const AddTask = () => {
    const [input,setInput]=useState("")
    const handleSubmit=async()=>{
        if (input !== "") {
            await addDoc(collection(db, "tasks"), {
                input,
                completed: false,
            });
            setInput("");
        }
    }
  return (
    <div className="w-full flex justify-center items-center">
        <div className="flex gap-1 lg:gap-3 px-2">
        <input className="w-[200px] lg:w-[1000px] h-12 border rounded-lg px-4 " value={input} placeholder="Enter your task here .." onChange={(e)=>setInput(e.target.value)} />
        <button className="border border-blue-500 text-blue-500 py-2 lg:py-3 px-5 lg:px-10 rounded-lg hover:text-white hover:bg-blue-500" onClick={handleSubmit}>Submit</button>
        </div>
        
    </div>
  )
}

export default AddTask