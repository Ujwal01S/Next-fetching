"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { fetchImage } from "@/app/picture/page";

const GetImage = () => {
  const [image, setImage] = useState([]);

  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["image"],
  //   queryFn: () =>
  //     fetch("https://dummyjson.com/products").then((res) => res.json()),
  // });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["image"],
    queryFn: fetchImage
      
  });

  console.log(data);




  //syntax complete nalekhera mistake .then chutiyo

  useEffect(() => {
    if (data) {
      setImage(data?.products);
    }
  }, [data]);

  if (isError) return <h1>Error while getting photo</h1>;

  // if (isLoading) return <h1 className="text-3xl text-blue-600 w-auto text-center">Loading data......</h1>;

  return (
    <div className="w-[96rem] mt-10 py-10 border-2 min-h-[98rem] flex flex-col items-center">
      {/* {data?.products.map((i) => (
        <div>
          <img src={i.images} width={"225px"} height={"225px"} />
          <p>{i.id}</p>
        </div>
      ))} */}
      <Carousel orientation="vertical | horizontal">
        <CarouselContent>
        {data?.products.map((i) => (
          <CarouselItem>
            <img src={i.images} width={"225px"} height={"225px"} />
            <p>{i.id}</p>
            <p>{i.title}</p>
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GetImage;
