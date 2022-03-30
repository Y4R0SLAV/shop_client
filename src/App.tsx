import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer/Footer"
import HeaderContainer from "./components/Header/HeaderContainer"

const App = () => {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}


export default App
