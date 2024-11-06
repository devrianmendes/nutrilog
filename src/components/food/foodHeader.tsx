import { Decimal } from "@prisma/client/runtime/library";

type FoodDataType = {
    name: string;
    calories: string | Decimal;
    carb: string | Decimal;
    fat: string | Decimal;
    prot: string | Decimal;
    fibr: string | Decimal;
    unity: string;
  };

export default function FoodHeader(props: FoodDataType) {
  return (
    <header className="bg-midGreen py-1 px-2">
      <div className="flex justify-between text-bright">
        <div className="flex items-center">
          <h3 className="font-bold mr-2">{props.name}</h3>
        </div>
        <div className="font-medium flex">
          <p className="mr-2">100{props.unity}</p>
          <p>{typeof(props.calories) === "string" ? props.calories : null}kcal</p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <ul className="flex ">
          <li className="mr-1 text-sky-600">{`Carb: ${
            props.carb === undefined ? 0 : props.carb
          }`}</li>
          <li className="mr-1 text-red-500">{`Prot: ${
            props.prot === undefined ? 0 : props.prot
          }`}</li>
          <li className="mr-1 text-yellow-300">{`Gord: ${
            props.fat === undefined ? 0 : props.fat
          }`}</li>
          <li className="mr-1 text-yellow-900">{`Fibr: ${
            props.fibr === undefined ? 0 : props.fibr
          }`}</li>
        </ul>
        <p className="bg-dark bg-opacity-70 text-lightGreen px-2 py-0.5">
          R$0,00
        </p>
      </div>
    </header>
  );
}
