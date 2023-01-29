import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './redux/reducers/_root.reducer';
import rootSaga from './redux/sagas/_root.saga.js'

import './index.css';
import './styles/main.css'

import Home from './views/Home';
import Error from './views/Error';
import WorkHistory from './views/WorkHistory';
// import NewWorkHistory from './views/NewWorkHistory';
// import ManageWorkHistory from './views/ManageWorkHistory';
import Education from './views/Education';
// import NewEducation from './views/NewEducation';
// import ManageEducation from './views/ManageEducation';
import About from './views/About';
// import Login from './views/Login';
import Sample from './views/Sample';

const sagaMiddleware = createSagaMiddleware();


const middlewareList = process.env.NODE_ENV ?
[sagaMiddleware] :
[sagaMiddleware];

const store = configureStore({
  reducer: rootReducer, 
  middleware: middlewareList
})

sagaMiddleware.run(rootSaga);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
    ]
  },
  {
    path: 'work-history',
    element: <WorkHistory />
  },
  {
    path: 'education',
    element: <Education />
  },
  {
    path: 'sample',
    element: <Sample />
  },
  {
    path: 'about',
    element: <About />
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
