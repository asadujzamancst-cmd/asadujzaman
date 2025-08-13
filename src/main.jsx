import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skill from './components/Skill/Skill.jsx'

import Contact from './components/Contact/Contact.jsx'
import Project from './components/Project/Project.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router=createBrowserRouter([

{
  path:"/",
  element:<App></App>,
  children:[
    {
  index :true,
  element:<Home></Home>
},{
  path:'home',
  element:<Home></Home>
},
{
  path:'about',
  element:<About></About>
},
{
  path:'skill',
  element:<Skill></Skill>
},

{
  path:'/contact',
  element:<Contact></Contact>
},
{
  path:'/project',
  element:<Project></Project>
}
  ]
}


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </StrictMode>,
)
