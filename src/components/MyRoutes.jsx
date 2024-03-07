import { Route, Routes } from "react-router-dom"
import { Contact, Home, Project } from "../pages"

export const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
  )
}
