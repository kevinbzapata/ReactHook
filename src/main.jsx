import React from 'react'
import ReactDOM from 'react-dom/client'
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
   BrowserRouter,
 } from "react-router-dom";

import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { Layout } from './05-userLayoutEffects/Layout'
import { CallbackHook } from './06-Memo/CallbackHook'
import { Memorize } from './06-Memo/Memorize'
import { MemorizeHook } from './06-Memo/MemorizeHook'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'



// import './08-useReducer/intro-reducer'


import './index.css'
import { ToDoAPP } from './08-useReducer/ToDoAPP'
import { MainApp } from './09-UseContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
   <BrowserRouter >
      {
          <MainApp />
      }
   </BrowserRouter>
    
 // </React.StrictMode>,
)
