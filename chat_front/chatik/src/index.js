import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './main';
import Entrance from './Entrance';
import Registration from './Registration'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {        path: "/entrance",
      element: <Entrance/>    },
  {        path: "/main",
      element: <Main/>,    },
      {        path: "/reg",
      element: <Registration/>,    },
  ,
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
