'use client'
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import { fetchData } from "./fetchData";

const GetPost = ({data}) => {
  console.log(data)
  
  const [product, setProduct] = useState(data?.products ?? []);
  // const product =await fetchData();
  // console.log(product);
  // useEffect(() => {
    // const fetchProducts = async () => {

    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     console.log(data);
    //     setProduct(data.products);

    // };

    // fetchProducts();
  // }, []);

  // const {data, isLoading} = useQuery({
  //   queryKey: ['product'],
  //   queryFn: .then((res) => 
  //   res.json()),

  // });

// console.log(product);

  useEffect(() => {
    if(data) {
        setProduct(data?.products);
    }
  }, [data]);

  // if(isLoading) return <h1 className="text-center text-2xl">Loading..........</h1>;

  // props.getItem(product);

  return (
    <div className="inset-0 flex flex-wrap gap-3 bg-slate-300 pl-6 pt-3">
      {product?.map((p) => (
        <div className="w-64" key={p.id}>
          <Card className='min-h-72'>
            <Link href={`/post/${p.id}`}>
            <CardHeader>
              <CardTitle>
                {p.title.split("").slice(0, 12).join("")}...
              </CardTitle>
              <CardDescription>{p.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{p.description.split("").slice(0, 56).join("")}...</p>
            </CardContent>
            <CardFooter>
              <p>Price : ${p.price}</p>
            </CardFooter>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default GetPost;
