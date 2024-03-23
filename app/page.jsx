import FooterTop from "@/components/FooterTop";
import Product from "@/components/products/Product";
import data from "@/data/db.json";

export const metadata = {
  title: "Home Page",
  description:
    "Duis aliquip nostrud pariatur ullamco excepteur veniam culpa commodo.",
};

export default function Home() {
  return (
    <>
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {data.products.slice(0, 12).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </section>
        <FooterTop />
      </main>
    </>
  );
}
