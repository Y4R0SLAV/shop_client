import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '../routes'
import PageNotFound from '../pages/PageNotFound'
import s from './appRouter.module.css'
import ScrollToTop from './ScrollToTop'


const AppRouter = () => {
  return (
    <div className={s.wrapper}>
      
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        {routes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={< Component />} />
        })}

      </Routes>
    </div>
  )
}

export default AppRouter
