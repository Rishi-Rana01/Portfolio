import {React, useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(() => {
    Aos.init({
      duration:1000,
    })
  }, [])

  return (
   <main className='bg-gray-950'>

   </main>
  )
}

export default App
