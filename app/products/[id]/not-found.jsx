import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Product Not Found",
};

const NotFound = () => {
  return (
    <>
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10 ">
        <h2 className="text-4xl  font-bold pb-5">
          Somthing is wrong - <span className="text-red-600">404</span>
        </h2>

        <div className="flex gap-2">
          <Link className="px-5 py-2 bg-purple-500 rounded text-white" href="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
