'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const Products = () => {
  usePageTitle('Products');

  const productData = [
    {
      title: "iConnect",
      image: "/connect.jpg",
      description: "This is a brief description for I-Connect..."
    },
    {
      title: "iShop",
      image: "/shop.jpg",
      description: "This is a brief description for I-Shop..."
    },
    {
      title: "iCareBot",
      image: "/care.jpg",
      description: "This is a brief description for I-Carebot..."
    }
  ];

  return (
    <div>
      <div className='relative'>
        <Banner customTitle="Products"></Banner>
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-lightBackground text-lightText px-6 md:px-12 lg:px-24 py-16">
      <div className="flex justify-center items-center flex-col mb-12">
            <div><h2 className="text-blue-600 text-sm font-semibold uppercase">Our Products</h2></div>
            <div><h1 className="text-4xl font-bold text-gray-800 mb-4">
              Browse Our Products
            </h1></div>
            {/* <div><p className="text-gray-600 text-lg">
              These people work on making our product best.
            </p></div> */}
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-0 xl:mb-48">
          {productData.map((product, index) => {
            return (
              <div key={index} className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                  <div className="my-6">
                    <Link
                        href="/products"
                        className="inline-flex items-center font-semibold px-6 py-3 transition duration-200 text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <span className="mx-2">Read More</span>
                        <div className="text-2xl">
                            <MdNavigateNext />
                        </div>
                    </Link>
                </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Products;
