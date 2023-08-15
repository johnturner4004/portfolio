/* eslint-disable react/jsx-filename-extension */

import './index.css'
import './styles/main.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './views/About'
import Education from './views/Education'
import Error from './views/Error'
import Home from './views/Home'
import MapPage from './views/Map'
import Mortgage from './views/Mortgage'
import Sample from './views/Sample'
import WorkHistory from './views/WorkHistory'
import reportWebVitals from './reportWebVitals'

/*
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/reducers/_root.reducer'
import rootSaga from './redux/sagas/_root.saga'

import logger from 'redux-logger';

import NewWorkHistory from './views/NewWorkHistory';
import ManageWorkHistory from './views/ManageWorkHistory';

import NewEducation from './views/NewEducation';
import ManageEducation from './views/ManageEducation';

import Login from './views/Login';

const sagaMiddleware = createSagaMiddleware()

const middlewareList = process.env.NODE_ENV
\? [sagaMiddleware]
: [sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewareList,
})

sagaMiddleware.run(rootSaga)
*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
    ],
  },
  {
    path: 'work-history',
    element: <WorkHistory />,
  },
  {
    path: 'education',
    element: <Education />,
  },
  {
    path: 'sample',
    element: <Sample />,
  },
  {
    path: 'sample/mortgage',
    element: <Mortgage />,
  },
  {
    path: 'sample/map',
    element: <MapPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  // {
  //   path: 'work-history/new',
  //   element: <NewWorkHistory />
  // },
  // {
  //   path: 'work-history/manage',
  //   element: <ManageWorkHistory />
  // },
  // {
  //   path: 'education/new',
  //   element: <NewEducation />
  // },
  // {
  //   path: 'education/manage',
  //   element: <ManageEducation />
  // },
  // {
  //   path: 'login',
  //   element: <Login />
  // }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Analytics />
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
