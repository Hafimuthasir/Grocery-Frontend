import { useState } from 'react'
import HomePage from './HomePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <HomePage/>
    <ToastContainer
  position="bottom-left"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  className='md:left-[50px] md:bottom-[30px]'
/>
    </>
  )
}

export default App
