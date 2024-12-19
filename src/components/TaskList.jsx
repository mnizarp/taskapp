import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing,setIsEditing]=useState()
  const [editedInput,setEditedInput]=useState()

  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({ ...doc.data(), id: doc.id });
      });
      console.log(tasksArray)
      setTasks(tasksArray);
    });
    return () => unsub();
  }, []);
  const handleComplete = async(task) => {
    await updateDoc(doc(db, "tasks", task.id), { completed: true });
  };
  
  const handleEdit=(task)=>{
     setIsEditing(task.id)
     setEditedInput(task.input)
  }

  const update = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), { input: editedInput });
    setIsEditing()
    setEditedInput("")
  };

  
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id)); }

  return (
    <div className="h-[70%] border mx-3 p-2 flex flex-col gap-2 overflow-y-scroll">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-full h-12 bg-slate-200 flex justify-between items-center px-5"
        >
            {
                task.id == isEditing ?
                <input className="w-[80px] lg:w-[500px] h-10 border rounded-lg px-4 " value={editedInput} placeholder="Enter your task here .." onChange={(e)=>setEditedInput(e.target.value)} />
                :
            <h1>{task.input}</h1>
            }
          
          <div className="flex items-center justify-center gap-2">
            {
                isEditing==task.id ?
                 <FaRegSave onClick={()=>update(task)} />                :
                <FaEdit onClick={()=>{
                    handleEdit(task)
                }} />
            }
           
            <MdDelete onClick={()=>handleDelete(task.id)} />
            <button
              className={`border border-blue-500 text-blue-500 text-xs py-1 px-5 rounded-lg hover:text-white hover:bg-blue-500 `}
              onClick={()=> handleComplete(task)}
              disabled={task.completed==true ? true : false}
            >
              { task.completed ==true ? "Completed" : "Complete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
