import {Route,Routes} from "react-router-dom";
import Home from "./home/Home";
import Course from "./component/Course";
import Login from "./component/Login";
import Signup from "./component/signup";
import Contact from "./component/Contact";

export default function App() {
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white"> 
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Course" element={<Course/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
     </div>
    </>
    
  )
}

