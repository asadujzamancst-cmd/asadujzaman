
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'



function App() {
  

  return (
   <div className='app'>
    <Navbar></Navbar>
    <Outlet></Outlet>
 
    <Footer></Footer>
    
   





   </div>
  )
}

export default App
