import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Task1 from './Pages/Task1/Task1'
import Task2 from './Pages/Task2/Task2'
import Task3 from './Pages/Task3/Task3'
import Task5 from './Pages/Task5/task5'

const route = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Task1/>
      },
      {
        path:'/task2',
        element:<Task2/>
      },
      {
        path:'/task3',
        element:<Task3/>
      },
      {
        path:'/task5',
        element:<Task5/>
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={route}/>
}
