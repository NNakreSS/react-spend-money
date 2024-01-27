const Header = () => {
  return (
    <header className="bg-white items-center flex justify-center flex-wrap gap-5 p-7 m-auto mt-5 rounded-sm">
      <div className="w-full flex justify-center">
        <img
          className="w-40 h-40 rounded-full"
          src="https://static01.nyt.com/images/2021/05/17/business/14altGates-print/merlin_183135423_1167fa8a-7940-427e-b690-68876010d286-jumbo.jpg?quality=75&auto=webp"
          alt="Bill Gates"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Spend Bill Gates' Money</h1>
      </div>
    </header>
  );
};
export default Header;
