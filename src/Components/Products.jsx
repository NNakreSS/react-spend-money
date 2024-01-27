import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Redux/slicers/producstSlice";
import { addItem, removeItem } from "../Redux/slicers/producstSlice";

const Products = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    basket,
    money,
  } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const buyClickHandle = ({ id, price, title }) => {
    dispatch(addItem({ id, price, title }));
  };

  const sellClickHandle = ({ id, price }) => {
    dispatch(removeItem({ id, price }));
  };

  const isExistItem = (id) => {
    const isExist = basket.find((item) => item.id === id);
    const disabled = isExist ? true : false;
    return disabled;
  };

  const itemCount = (id) => {
    const item = basket.find((item) => item.id === id);
    return item?.count || 0;
  };

  return (
    <section
      id="products"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2"
    >
      {products?.map((item, index) => (
        <article className="product bg-white rounded-sm" key={index}>
          <img className="h-44 m-auto" src={item.thumbnail} alt={item.title} />
          <span className="product-title text-center w-full block font-bold text-2xl my-2 text-ellipsis text-nowrap overflow-hidden p-2 ">
            {item.title}
          </span>
          <span className="product-price block text-center my-2 font-semibold text-green-500">
            ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <div className="product-actions grid grid-cols-3 p-2 mb-5 gap-5">
            <button
              disabled={!isExistItem(item.id)}
              onClick={() => sellClickHandle(item)}
              className={
                "product-sell-button border p-2 rounded-sm font-bold " +
                (isExistItem(item.id) ? "bg-red-400 text-white" : "bg-gray-200")
              }
            >
              Sell
            </button>
            <div className="product-buy-count flex justify-center items-center border border-black rounded-sm">
              {itemCount(item.id)}
            </div>
            <button
              onClick={() => buyClickHandle(item)}
              className={
                "product-buy-button border p-2 rounded-sm font-bold text-white " +
                (money >= item.price ? "bg-green-400" : "bg-gray-400")
              }
              disabled={money >= item.price ? false : true}
            >
              Buy
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Products;
