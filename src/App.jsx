import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='no-scrollbar'>
     <Landing/>
    </div>
  )
}

export default App
