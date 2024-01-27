import Money from "./Money";
import Products from "./Products";
import Receipt from "./Receipt";

const Main = () => {
  return (
    <main className="m-auto mt-2">
      <Money />
      <Products />
      <Receipt />
    </main>
  );
};

export default Main;
