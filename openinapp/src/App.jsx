import { Login } from "./Pages";
import { Route, Routes,useNavigate  } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
   <div className=" overflow-x-hidden bg-[#F8FAFF] h-[2000px] font-lato">

  {/* <Login/> */}
    {/* <Routes>
      <Route path="/" element = {<Login />} />
      <Route path="/dashboard" element = {<Dashboard/>} />
    </Routes> */}
    <Dashboard />

   </div>
  );
}

export default App;
