import Link from "next/link";
import data from "@/data/db.json";
import Rating from "@/components/Rating";
import ThumbnailImage from "@/components/products/ThumbnailImage";

export function generateStaticParams() {
  return data.products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Daynamic Meta Data
export async function generateMetadata({ params }) {
  const product = data.products.find((item) => item.id === parseInt(params.id));

  return {
    title: `${product.title} | Product Page `,
    description: product.description,
  };
}

const ProductDetails = ({ params }) => {
  // todo leter
  // const productExist = data.products.findIndex(
  //   (item) => item.id === parseInt(params.id)
  // );
  // if (!productExist) {
  //   notFound();
  // }

  const product = data.products.find((item) => item.id === parseInt(params.id));

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <ThumbnailImage images={images} thumbnail={thumbnail} />
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <Link
              href={`/category/${category}`}
              className="text-[#919090] my-3"
            >
              {category}
            </Link>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Rating value={rating} />
            </div>

            <div>
              <span className="font-medium">Stock :</span>
              <span className={stock < 10 ? "text-red-500" : ""}>{stock}</span>
            </div>
            <div>
              <span className="font-medium">Brand :</span> <span>{brand}</span>
            </div>

            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${price.toFixed(2)}
                </span>
                <span className="font-bold text-2xl">
                  ${(price - (price * discountPercentage) / 100).toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {(price - (price * discountPercentage) / 100).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
