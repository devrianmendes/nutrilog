import MenuOptions from "../navMenu/menuOptions";

export default function MenuCard({ menu }: { menu: boolean }) {
  return (
    <div
      className={`w-60 h-auto p-5 right-0 top-0 absolute z-10 text-center font-semibold duration-200 ${
        menu ? "visible opacity-100" : "invisible opacity-0"
      } bg-bright drop-shadow-2xl`}
    >
      <MenuOptions />
    </div>
  );
}
