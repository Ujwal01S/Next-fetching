import GetImage from '@/components/GetImage'
import React from 'react'

export const fetchImage  = async() => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};



const page = () => {


  return (
    <div>
        <GetImage/>
    </div>
  )
}

export default page;

// export function generateMetaData ({params}){
//     return{
//         title: 'Picture page title'
//     }
// }