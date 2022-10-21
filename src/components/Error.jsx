import React from 'react'


const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase font-bold p-2 rounded-lg mb-5'>
        <p>{children}</p>
    </div>
  )
}

export default Error