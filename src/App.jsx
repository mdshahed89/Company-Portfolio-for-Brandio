import React, {useState, useEffect} from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import Loading from "./Component/Loading/Loading"


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const timeout = setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      {
        loading ? <Loading />
        :
        (
        <div className=" font-Railway ">
        
        <Header />
        <Outlet />
        <Footer />

      </div>
      )
      }
    </>
  )
}

export default App
