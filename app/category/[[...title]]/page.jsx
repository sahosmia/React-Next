import React from "react";
import data from "@/data/db.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Product from "@/components/products/Product";
import FooterTop from "@/components/FooterTop";

export function generateStaticParams() {
  return data.categories;
}

// Daynamic Meta Data
export async function generateMetadata({ params }) {
  return {
    title: `${params.title ? params.title[0] : "All"} | Category Page `,
    description:
      "Duis aliquip nostrud pariatur ullamco excepteur veniam culpa commodo.",
  };
}
const Category = ({ params }) => {
  const { title } = params;
  if (title) {
    if (title.length <= 1) {
      const categoryExist = data.categories.includes(title[0]); // get true or false
      if (!categoryExist) {
        notFound();
      }
    } else {
      notFound();
    }
  }

  // category isset get this category item ethier get all item
  const products = title
    ? data.products.filter((item) => item.category === title[0])
    : data.products;

  return (
    <main>
      {/* <!-- Product section start --> */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <Link
            href="/category"
            className={`hover:border-b border-black block h-6 box-border mt-5 ${
              !title ? "text-red-500" : ""
            }`}
          >
            All
          </Link>
          {data.categories.map((item) => (
            <Link
              key={item}
              href={`/category/${item}`}
              className={`hover:border-b border-black block h-6 box-border mt-5 ${
                title && title[0] === item ? "text-red-500" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
      <FooterTop />
    </main>
  );
};

export default Category;
