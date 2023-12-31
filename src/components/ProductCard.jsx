import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import AddButton from "./AddButon";

function ProductCard({ product }) {
  const { selectCategory } = useContext(ProductContext);
  const descriptionWords = product.description.split(" ");
  const truncatedDescription = descriptionWords.slice(0, 20).join(" ");

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "300px",
    width: "auto",
    height: "auto",
  };

  return (
    <div className='border border-neutral-500 p-4 rounded-md shadow-xl'>
      <p className='text-xl text-stone-800'>
        {product.title}
      </p>

      <img
        className='p-2 w-48 mx-auto mt-4'
        src={product.image}
        alt=''
        style={imageStyle}
      />

      <p className='text-xs text-stone-600 mt-3'>
        <span>Category: </span>
        <a
          href='#'
          className='hover:underline'
          onClick={() => {
            if (product.category === "men's clothing") {
              selectCategory("men's clothing");
            } else if (product.category === "women's clothing") {
              selectCategory("women's clothing");
            } else if (product.category === "jewelery") {
              selectCategory("jewelery");
            } else if (product.category === "electronics") {
              selectCategory("electronics");
            }
          }}
        >
          {product.category}
        </a>
      </p>

      <p className='text-zinc-400 p-2'>{truncatedDescription}</p>

      <div className='flex items-center justify-between mx-3 mt-3'>
        <p className='text-left'>
          <span className='text-stone-500 underline'>Price</span>
          <span className='text-stone-500'>: </span>
          <span className='text-stone-600'>${product.price}</span>
        </p>
        <AddButton product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
