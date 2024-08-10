import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <BsSearch
        size={20}
        // onClick={handleSearch}
        className="hover:cursor-pointer"
      />
      <input
        type="text"
        className="bg-transparent p-2 focus:outline-none w-full"
        // value={food}
        // onChange={(e) => setFood(e.target.value)}
      />
    </div>
  );
}
