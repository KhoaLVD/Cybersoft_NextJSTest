import { fetchDetail } from "../../about/services/page";

export async function generateMetadata({ params }: any) {
  const prodDetail = await fetchDetail(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}


export default async function Detail(props: any) {
  const {id} = await props.params;
  const data = await fetchDetail(id);
  // console.log(id);
  return (
    <div className="container mx-auto">
      <h1>{data.name}</h1>
      <img className="rounded-t-lg" src={data.image} alt="" />
      <h2>{data.price}</h2>
      <p>{data.description}</p>
    </div>
  )
}
