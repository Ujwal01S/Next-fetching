import React from 'react'
import GetPost from './GetPost'
import { Span } from 'next/dist/trace'



const page = async () => {

  // const data = await () => fetch('https://dummyjson.com/products')

    const response = await fetch('https://dummyjson.com/products')

    if(!response.ok) return <>Loading...</>

    const resposneJson = await response.json()

    

  return (
    <div className=' mt-[8px]'>
        <GetPost data={resposneJson}/>

    </div>
  )
}

export default page;

export function generateMetaData({params}){
  return{
    title: 'Post from random',
    discription: 'Post page'
  }
}