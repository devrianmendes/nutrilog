export default function Hamburguer() {
  return (
    <div className="h-10 flex flex-col p-2 justify-between hover:cursor-pointer">
      <div className="bg-midGreen w-7 h-1 rounded"></div>
      <div className="bg-midGreen w-7 h-1 rounded"></div>
      <div className="bg-midGreen w-7 h-1 rounded"></div>
    </div>
  );
}
