function Menu(Props) {
  return (
    <div className="flex gap-4 items-center">
      <img className="w-[240px] h-[110] rounded" src={Props.image} />
      <div>
        <h1 className=" font-bold text-1xl">{Props.name}</h1>

        <p>{Props.desc}</p>
        <h1>${Props.price}</h1>
        <button className="bg-yellow-500 px-4 py-2 rounded mt-2">
          Order Now
        </button>
      </div>
    </div>
  );
}
export default Menu;
