import { useSelector } from "react-redux";

const Money = () => {
  const money = useSelector((state) => state.Products.money);
  return (
    <section
      id="money"
      className=" text-2xl bg-green-600 text-center text-white font-bold md:text-4xl p-5 sticky top-0"
    >
      <div>${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
    </section>
  );
};

export default Money;
