'use client'
import { useEffect, useState } from "react";
interface IShoe {
  sizes: string[],
  id: string,
  name: string,
  image: string,
  imgLink: string,
  price: number,
  description: string,
  alias: string,
  quantity: number,
  deleted: boolean,
  categories: any[],
  relatedProducts: string[],
}

export default function Home() {
  const [data, setData] = useState<IShoe[]>([]);
  const fetchData = async () =>{
    try {
      const result = await fetch("https://apistore.cybersoft.edu.vn/api/Product");
      const data = await result.json();
      setData(data.content);

    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchData();
  }, [])

  const renderData = () =>{
    return data.map((shoes) => (
      

      <div key={shoes.id} className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={shoes.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{shoes.name}</h5>
          </a>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>


    ));
  }
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>List shoes</h1>
      <div className="grid grid-cols-3 mt-4">
       {renderData()}
      </div>
    </div>
  );
}
