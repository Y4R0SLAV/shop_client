import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from "../routes"
import PageNotFound from './../pages/PageNotFound'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        {routes.map(({ path, Component }) =>
          <Route key={path} path={path} element={< Component />} />
        )}
      </Routes>
    </div>
  )
}

export default AppRouter
