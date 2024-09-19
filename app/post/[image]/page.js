"use client";
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

const Detail = ({ params }) => {
  const [detail, setDetail] = useState({});

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${params.image}`).then((res) =>
        res.json()
      ),
  });


  if (isError) return <h1>Error while getting individual data</h1>;

  useEffect(() => {
    if (data) {
      setDetail(data);
      console.log(detail, "detail");
    }
  }, [data]);

  if (isLoading) return <h1>Loading.........</h1>;


  return (
    <>
    <div className="min-h-80 ">
      <h1>Individual Data</h1>
      <div>
      <Card className='min-h-96 flex flex-col items-center justify-center mt-60 w-96 ml-96' >
      <img src={detail.images} width={'195rem'} height={'195rem'}/>

        <CardHeader>
          <CardTitle>{detail.title}</CardTitle>
          <CardDescription>{detail.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{detail.description}</p>
        </CardContent>
        <CardFooter>
          <p>{detail.price}</p>
        </CardFooter>
      </Card>
      </div>
      </div>
    </>
  );
};

export default Detail;
