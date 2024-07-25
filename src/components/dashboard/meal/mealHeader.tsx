import { ChildrenProps } from "@/types/types";

export default function MealHeader({
  children,
  mealKcal,
  mealCarb,
  mealProt,
  mealGord,
}: ChildrenProps) {
  return (
    <div className="bg-midGreen py-1 px-2">
      <div className="flex justify-between text-bright">
        <div className="flex items-center">
          <h3 className="font-bold mr-2">{children}</h3>
          <div>
            <input type="time" className="bg-midGreen" />
          </div>
        </div>
        <div className="font-medium">{mealKcal} 100 Kcal</div>
      </div>
      <div className="flex justify-between text-sm">
        <ul className="flex ">
          <li className="mr-1 text-sky-600">Carb: 0</li>
          <li className="mr-1 text-red-500">Prot: 0</li>
          <li className="mr-1 text-yellow-300">Gord: 0</li>
        </ul>
        <p className="bg-dark bg-opacity-70 text-lightGreen px-2 py-0.5">
          R$0,00
        </p>
      </div>
    </div>
  );
}
