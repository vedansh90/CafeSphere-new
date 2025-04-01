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
import BookingDashboard from "./pages/bookingDashboard"
import AddCafe from "./pages/AddCafe"
import CafeDetails from "./pages/CafeDetails"
import BookCafe from "./pages/BookCafe"
import SearchCafe from "./pages/SearchCafe"
import ForgotPassUser from "./pages/ForgotPassUser"
import VerificationCodeUser from "./pages/VerificationCodeUser"
import Profileuser from "./pages/Profileuser"


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
      <Route path="/login/forgot-password" element={
        <>
         <Navbar/>
        <ForgotPassUser/>
        <Footer/>
        </>
      }/>
      <Route path="/login/forgot-password/verification-code" element={
        <>
        <Navbar/>
        <VerificationCodeUser/>
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
      <Route path="/search" element={
        <>
        <Navbar/>
        <SearchCafe/>
        <Footer/>
        </>
      }/>
      <Route path="/profile/:id" element={
        <>
        <Navbar/>
        <Profileuser/>
        <Footer/>
        </>
      }/>
      <Route path="/owner-dashboard/:id" element={<OwnerDashboard/>}/>
      <Route path="/owner-dashboard/:id/bookings" element={<BookingDashboard/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
