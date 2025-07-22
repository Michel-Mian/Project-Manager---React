import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import MyProjects from './pages/MyProjects.jsx'
import Creator from './pages/creator.jsx'
import Project from './pages/project.jsx'
import AddProject from './pages/AddProject.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/myprojects", element: <MyProjects />},
  {path: "/creator", element: <Creator />},
  {path: "/project/:id", element: <Project />}, 
  {path: "/new-project", element: <AddProject />}, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
