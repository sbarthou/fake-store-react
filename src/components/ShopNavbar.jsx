import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ShopNavbar() {
  const { selectCategory } = useContext(ProductContext);

  return (
    <div className='p-4 flex justify-center items-center'>
      <div className='flex flex-col sm:flex-row items-center font-bold border border-neutral-400 px-6 py-3 rounded-md shadow-md'>
        <a
          className='hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:mx-4'
          href='#'
          onClick={() => selectCategory(0)}
        >
          All categories
        </a>
        <a
          className='hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:mx-4'
          href='#'
          onClick={() => selectCategory("men's clothing")}
        >
          Men's clothing
        </a>
        <a
          className='hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:mx-4'
          href='#'
          onClick={() => selectCategory("women's clothing")}
        >
          Women's clothing
        </a>
        <a
          className='hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md mb-4 sm:mb-0 sm:mx-4'
          href='#'
          onClick={() => selectCategory("jewelery")}
        >
          Jewelery
        </a>
        <a
          className='hover:shadow-xl rounded-md active:bg-stone-100 active:shadow-md sm:mx-4'
          href='#'
          onClick={() => selectCategory("electronics")}
        >
          Electronics
        </a>
      </div>
    </div>
  );
}

export default ShopNavbar;
