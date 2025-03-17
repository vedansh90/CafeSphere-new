import React from "react"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
// import Signup from "./pages/Contact"
import OwnerLogin from "./pages/OwnerLogin"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import OwnerDashboard from "./pages/OwnerDashboard"
import AddCafe from "./pages/AddCafe"
import CafeDetails from "./pages/CafeDetails"
import BookCafe from "./pages/BookCafe"

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>
      }/>
      <Route path="/add-cafe" element={
        <>
        <Navbar/>
        <AddCafe/>
        <Footer/>
        </>
      }/>
      <Route path="/about" element={
        <>
        <Navbar/>
        <About/>
        <Footer/>
        </>
      }/>
      <Route path="/cafe/:id" element={
        <>
        <Navbar/>
        <CafeDetails/>
        <Footer/>
        </>
      }/>
      <Route path="/contact" element={
        <>
         <Navbar/>
        <Contact/>
        <Footer/>
        </>
      }/>
      <Route path="/login" element={
        <>
         <Navbar/>
        <Login/>
        <Footer/>
        </>
      }/>
      <Route path="/owner/login" element={
        <>
        <Navbar/>
        <OwnerLogin/>
        <Footer/>
        </>
      }/>
      <Route path="/cafe/:id/book" element={
        <>
        <Navbar/>
        <BookCafe/>
        <Footer/>
        </>
      }/>
      <Route path="/owner-dashboard/:id" element={<OwnerDashboard/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
