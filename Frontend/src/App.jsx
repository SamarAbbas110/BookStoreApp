import Home from '../src/Home/Home'
import Courses from './Components/Courses/Courses'
import Login from './Components/Login'
import { Routes , Route } from "react-router-dom"
import Signup from './Components/Signup'
import Contacts from './Components/Contact/Contacts'

function App() {
  return (
    <>
    <div className=' dark:bg-slate-900 dark:text-white'>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
    </div>
    </>
  )
}

export default App
