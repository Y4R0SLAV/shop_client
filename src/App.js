import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import FooterContainer from "./components/Footer/FooterContainer"
import HeaderContainer from "./components/Header/HeaderContainer"

const App = () => {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <AppRouter />
      <FooterContainer />
    </BrowserRouter>
  )
}

export default App
