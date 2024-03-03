import { useState } from "react";
function Header() {
  const [isopen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };
  return (
    <div>
      <div className="bg-teal-700 flex justify-between p-6 text-white  ">
        <h1 className=" text-5xl font-bold">Tasbiix</h1>
        <i class="fa-solid fa-bars text-5xl sm:hidden"></i>
        <ul className="hidden sm:flex gap-16 text-3xl">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>

      <ul
        style={{ display: isopen == true ? "flex" : "" }}
        className=" sm:hidden bg-orange-500 text-white flex-col space-y-5 p-2  text-3xl"
      >
        <li>Home</li>
        <li>Service</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
export default Header;
