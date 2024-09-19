import React from 'react'
import { getData } from './getForServer'

const ServerSide = async() => {
    const productsData = await getData();
    
    console.log(productsData?.products?.title);
  return (
    <div>
        <h1 className='w-full text-center text-2xl text-red-600 mb-24'>ServerSide Rendering</h1>
        {productsData?.products?.map((p) => (
            <p>{p.title}</p>
        ))}
    </div>
  )
}

export default ServerSide;