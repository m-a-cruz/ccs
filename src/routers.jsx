import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom';
import App from './App';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Survey from './components/survey';
import Login from './components/login';
import Notfound from './components/notfound';
import Questions from './components/questions';

  const routers = createBrowserRouter([
  
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/survey/",
          element: <Survey />,
          // children: [
          //   {
          //     path: "/survey/1",
          //     element: <Survey1 />
          //   },
          //   {
          //     path: "/survey/2",
          //     element: <Survey2 />
          //   },
          // ]
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/question",
      element: <Questions />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
    
  ])
export default routers;