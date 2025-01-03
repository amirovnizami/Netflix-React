import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './landing/Landing'
import Login from './login/Login'
import SignUp from './SignUp/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './common/NotFound'
import Homepage from './homepage/Homepage'
import { useStore } from 'zustand'
import Store from './common/Store'
import Details from './details/Details'

function App() {
  const [count, setCount] = useState(0)
  const {accessToken} = useStore(Store)
  const PrivateRoute = ({ element }) => {
    return accessToken ? element: <NotFound />;
  };
  return (
    <div className='no-scrollbar'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route exact path="/home" element={<PrivateRoute element={<Homepage />} />} />
          <Route exact path="/details" element={<PrivateRoute element={<Details/>} />} />
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup"element={<SignUp />}/> 
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
