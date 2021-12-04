import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '../routes'
import PageNotFound from './../pages/PageNotFound'
import s from './appRouter.module.css'

const AppRouter = () => {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        {routes.map(({ path, Component }) => {
          if (path === '/sales') {
            return <Route key={path} path={path} element={< Component isSale={true} />} />
          } else {
            return <Route key={path} path={path} element={< Component />} />
          }
        }
        )}
      </Routes>
    </div>
  )
}

export default AppRouter
