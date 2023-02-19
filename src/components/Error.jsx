import {useState , useEffect} from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white uppercase font-bold p-4 text-center rounded-md'>
      <p>{children}</p>
    </div>
  )
} 

export default Error
