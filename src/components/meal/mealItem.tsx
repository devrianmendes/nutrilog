export default function MealItem() {
  return (
    <div className="mb-1 p-1 bg-bright bg-opacity-60">
      <div className="flex justify-between font-semibold">
        <h4 className="">Pão de forma integral</h4>
        <p>Kcal</p>
      </div>
      <div className="flex justify-between">
        <ul className="flex text-sm">
          <li className="mr-1 text-sky-600">Carb: 0</li>
          <li className="mr-1 text-red-500">Prot: 0</li>
          <li className="mr-1 text-yellow-600">Gord: 0</li>
        </ul>
        <div>
          <p className="font-semibold">100g (1pç)</p>
        </div>
      </div>
    </div>
  );
}
