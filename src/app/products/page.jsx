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
        <div className="absolute top-40 xl:top-52 px-24 md:px-32">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      <div className="
    min-h-screen flex flex-col items-center justify-center bg-lightBackground text-lightText">Products</div>

    </div>
  )
}

export default Products;