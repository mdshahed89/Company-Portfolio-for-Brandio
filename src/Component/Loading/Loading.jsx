import React from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <div className='bg-[#28292A] w-full h-[100vh] flex items-center justify-center '>

            {/* Loading square for squar.red network  */}
            <span className="loader  "><span className="loader-inner"></span></span>

        </div>
    )
}

export default Loading