'use client';

import Banner from "@/components/Banner";
import BreadCrumbs from "@/components/BreadCrumbs";
import usePageTitle from "@/components/hooks/usePageTitle";

const Products = () => {
  usePageTitle('Products');
  return (
    <div>
      <div className='relative'>
        <Banner customTitle="Products"></Banner>
      </div>
      <div className="px-16 md:px-24 mt-4 md:mt-0">
        <BreadCrumbs></BreadCrumbs>
      </div>
      <div className="
    min-h-screen flex flex-col items-center justify-center bg-lightBackground text-lightText">Products</div>

    </div>
  )
}

export default Products;