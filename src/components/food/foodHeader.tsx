type FoodDataType = {
    name: string;
    kcal: string;
    carb: string;
    fat: string;
    prot: string;
    fibr: string;
    unity: string;
    prep: string;
  };

export default function FoodHeader(props: FoodDataType) {
  console.log(props, 'alimento no header')
  return (
    <header className="bg-midGreen py-1 px-2">
      <div className="flex justify-between text-bright">
        <div className="flex items-center">
          <h3 className="font-bold mr-2">{props.name} {props.prep}</h3>
        </div>
        <div className="font-medium flex">
          <p className="mr-2">100{props.unity}</p>
          <p>{typeof(props.kcal) === "string" ? props.kcal : null}kcal</p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <ul className="flex ">
          <li className="mr-1 text-sky-600">{`Carb: ${
            props.carb ? props.carb : "0" 
          }`}</li>
          <li className="mr-1 text-red-500">{`Prot: ${
            props.prot ? props.prot : 0
          }`}</li>
          <li className="mr-1 text-yellow-300">{`Gord: ${
            props.fat ? props.fat : 0
          }`}</li>
          <li className="mr-1 text-yellow-900">{`Fibr: ${
            props.fibr ? props.fibr : 0
          }`}</li>
        </ul>
        <p className="bg-dark bg-opacity-70 text-lightGreen px-2 py-0.5">
          R$0,00
        </p>
      </div>
    </header>
  );
}
