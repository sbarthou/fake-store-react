import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function TotalPrice() {
  const { totalPrice } = useContext(ProductContext);

  const precioTotal = totalPrice.reduce(function (acumulador, item) {
    return acumulador + item.price * item.quantity;
  }, 0);

  const roundPrecioTotal = Number(precioTotal.toFixed(2));

  return (
    <div className='flex justify-end mx-3 my-10 gap-10'>
      <div className='p-2 bg-stone-50 border border-stone-400 rounded shadow'>
        Total price: ${roundPrecioTotal}
      </div>
      <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow hover:shadow-xl active:shadow-md'>
        Pay
      </button>
    </div>
  );
}

export default TotalPrice;
