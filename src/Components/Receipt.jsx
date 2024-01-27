import { useState } from "react";
import { useSelector } from "react-redux";

const Receipt = () => {
  const basket = useSelector((state) => state.Products.basket);

  const totalPrice = () => {
    let total = 0;
    basket.map((item) => (total += item.count * item.price));
    return total;
  };

  return (
    <section id="receipt" className="m-auto mt-10 w-5/12">
      <h2 className="font-bold text-3xl text-center mb-5">Your Receipt</h2>
      <article id="receipt-products">
        {basket?.map((item, index) => (
          <div className="grid grid-cols-3">
            <div id="basket-product-name" className="text-start">
              {item.title}
            </div>
            <div id="basket-product-count" className="text-center">
              x{item.count}
            </div>
            <div id="basket-product-price" className="text-end">
              ${item.count * item.price}
            </div>
          </div>
        ))}
        <hr className="border border-black" />
        <div id="total-price" className="grid grid-cols-2 my-3">
          <h4 className="font-semibold text-2xl flex justify-start items-center">
            TOTAL
          </h4>
          <div className="flex justify-end items-center text-2xl text-green-500 font-bold">
            $
            {totalPrice()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Receipt;
