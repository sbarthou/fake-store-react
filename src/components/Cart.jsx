import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import CartCard from "./CartCard";
import TotalPrice from "./TotalPrice";

function Cart({ cartItems }) {
  const { toggleCart, clearCart } = useContext(ProductContext);

  return (
    <div>
      <button
        className='mb-3 p-1 text-sm rounded-md bg-stone-100 shadow hover:bg-stone-200 hover:shadow-xl active:shadow-md'
        onClick={toggleCart}
      >
        Back
      </button>

      <button
        className='absolute right-8 mb-3 p-1 text-sm rounded-md text-white bg-red-400 shadow hover:bg-red-500 hover:shadow-xl active:shadow-md'
        onClick={clearCart}
      >
        Clear cart
      </button>

      {cartItems.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}

      <TotalPrice />
    </div>
  );
}

export default Cart;
