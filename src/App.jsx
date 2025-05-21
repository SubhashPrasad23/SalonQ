import Navbar from "./components/layout/Navbar"
import Login from "./pages/auth/Login"
import Home from "./pages/user/Home"


function App() {

  return (
    <div className="flex flex-col h-screen bg-[#DDD0C8] text-[#323232]">
      <Navbar />
      <div className="flex-1 overflow-auto">     
         {/* <Login /> */}
      <Home />
      </div>
    </div>
  )
}

export default App
