import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './componet/test'
import { TestContextProvider } from "./context/test-context";
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const createContexts = createContext("count")

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <TestContextProvider>
          <createContexts.Provider value={count}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='test' element={<Test />} />

            </Routes>

          </createContexts.Provider>
        </TestContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
