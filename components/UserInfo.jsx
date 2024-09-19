import React from 'react'

const UserInfo = () => {
  return (
    <div className='flex space-x-4 items-center bg-slate-800 text-white'>
        <p className='bg-green-600 rounded-full w-8 h-8 flex  justify-center items-center'>US</p>
        <div className='flex flex-col'>
            <p>Ujwal Suwal</p>
            <p>suwal.ujwal@gmail.com</p>

        </div>
    </div>
  )
}

export default UserInfo