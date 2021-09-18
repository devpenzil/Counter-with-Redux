import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement,reset} from './Redux/actions/index'
import './App.css'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App bg-purple-200 w-full h-screen flex justify-center items-center">
        <div className="w-64 bg-purple-600 p-4">
          <div className="text-center text-9xl text-white">{counter}</div>
          <div className="flex justify-around mt-12">
            <button onClick={()=>dispatch(increment())} className="w-10 bg-yellow-600">+</button>
            <button onClick={()=>dispatch(reset())} className="w-10 bg-yellow-600">0</button>
            <button onClick={()=>dispatch(decrement())}  className="w-10 bg-yellow-600">-</button>
          </div>
        </div>
    </div>
  )
}

export default App
