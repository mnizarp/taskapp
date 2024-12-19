import { useNavigate } from "react-router-dom"
import AddTask from "../components/AddTask"
import TaskList from "../components/TaskList"

const TaskPage = () => {
    const navigate=useNavigate()
  return (
    <div className="w-screen h-screen flex flex-col gap-7">
       <div className="w-screen h-10 lg:h-16 flex items-center px-5">
          <button className="border border-blue-500 text-blue-500 py-3 px-10 rounded-lg hover:text-white hover:bg-blue-500" onClick={()=>navigate('/')} > {"<- Back"}</button>
       </div>
       <AddTask/>
       <TaskList/>
    </div>
  )
}

export default TaskPage