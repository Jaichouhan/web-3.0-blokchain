import { useState } from 'react'
import {Navbar ,Footer,Welcome,Transction,Server,Loader} from "./components/index"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />  
      <Welcome />
    </div>
    <Server/>
    <Transction />
    <Footer />
   </div>
  )
}

export default App
