import React from 'react'

function Button({props}) {
  return (
    <div className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-24 cursor-pointer'>{props}</div>
  )
}

export default Button
