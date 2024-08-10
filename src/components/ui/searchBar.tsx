import { BsSearch } from "react-icons/bs";

export default function SearchBar({active}: {active: string}) {
  return (
    <div className="flex items-center duration-150">
      <BsSearch size={20} className="hover:cursor-pointer" />
      <input
        type="text"
        className="bg-transparent p-2 focus:outline-none w-full"
        placeholder={`Pesquisar ${active}`}
      />
    </div>
  );
}
