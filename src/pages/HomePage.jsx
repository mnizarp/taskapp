import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate=useNavigate()
    const handleNavBtn=(path)=>{
        navigate(path)
    }
    
  return (
    <div className="w-screen h-screen flex-col flex lg:flex-row justify-center items-center gap-10">
       <button className="border border-blue-500 text-blue-500 py-3 px-10 rounded-lg hover:text-white hover:bg-blue-500" onClick={()=>handleNavBtn('/tasks')}>Task Page</button>
       <button className="border border-blue-500 text-blue-500 py-3 px-10 rounded-lg hover:text-white hover:bg-blue-500" onClick={()=>handleNavBtn('/products')}>Product Page</button>
    </div>
  )
}

export default HomePage