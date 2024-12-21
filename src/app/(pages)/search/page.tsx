import { fetchSearch } from "../about/services/page";
import Link from "next/link"

export default async function Search({searchParams}: any) {
    const {keyword} = await searchParams;
    const data = await fetchSearch(keyword);
    console.log(data);

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
      <h1>Search result</h1>
      <div className="grid grid-cols-3 mt-4">
       {renderData()}
      </div>
    </div>
  )
}
