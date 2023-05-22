import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Routes,} from "react-router-dom";
import App from "./components/App";
import AddMovie from "./components/AddMovie";





const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App/>}/>
            <Route path="/add" element={<AddMovie/>} />
        </Route>
        
    )
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
)


