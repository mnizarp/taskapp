import { BrowserRouter,Routes,Route} from'react-router-dom'
import TaskPage from './pages/TaskPage'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/tasks' element={<TaskPage/>} />
          <Route path='/products' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
        