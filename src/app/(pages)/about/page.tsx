import {fetchData} from "@/app/(pages)/about/services/page";
import Link from "next/link"


export const metadata = {
  title: "Shoes App - Home",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes App",
    url: "https://yourwebsite.com",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};


export default async function About() {
  const data = await fetchData();

  const renderData = () =>{
    return data.map((shoes: any) => (
      

      <div key={shoes.id} className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={shoes.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{shoes.name}</h5>
          </a>
          <Link href={`/detail/${shoes.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
          </Link>
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
  )
}
