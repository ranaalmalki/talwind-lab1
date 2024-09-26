import NavbarHeader from './components/NavbarHeader'
import Header from './components/Header'
import Carditems from './components/Carditems'
import Footer from './components/Footer'
import './App.css'


function App() {

  return (
  
    // <div className='bg-green-400 shadow w-[100vh] h-screen'>
    //   <div className='h-screen flex justify-center justify-between items-center max-sm:flex-col'>
    //     <div className=' w-[15vw] h-[20vh] bg-amber-700 shadow-2xl shadow-black border-4 border-black rounded-full max-sm:w-24'>  
    //       <p className='text-center p-9 text-xl text-gray-400 font-bold'>ffffffffffffffff</p>

    //     </div><div className=' w-[15vw] h-[20vh] bg-amber-700 shadow-2xl shadow-black border-4 border-black rounded-full max-sm:w-24'>  
    //     <p className='text-center p-9 text-xl text-gray-400 font-bold'>ffffffffffffffff</p>

    //   </div>
    // </div>
    // </div>
    <div>
  <NavbarHeader/>
  <Header/>
  <Carditems/>
  <Footer/>
    </div>
  
  )
}

export default App
