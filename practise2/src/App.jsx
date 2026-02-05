import MainContainer from './components/MainContainer'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer,Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <BrowserRouter>
    <MainContainer/>
    </BrowserRouter>


      <ToastContainer
        position="top-center"
        autoClose={1000}  
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        transition={Zoom}
        theme="colored"
      />

      
    </>
  )
}

export default App
