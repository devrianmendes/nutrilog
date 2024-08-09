import Button from "../ui/button";
import Input from "../ui/input";
import FoodHeader from "./foodHeader";

export default function FoodNew() {
  return (
    <div className="mb-5">
      <FoodHeader>Teste</FoodHeader>
      <div className="p-1 pt-2 bg-stone-300">
        <Input placeholder="Nome" />
        <div className="flex">
          <Input extraClass="w-full mr-0.5 " placeholder="Carb" />
          <Input extraClass="w-full mr-0.5 ml-0.5" placeholder="Prot" />
          <Input extraClass="w-full ml-0.5" placeholder="Gord" />
        </div>
        <div className="flex">
          <Input extraClass="w-full mr-0.5" placeholder="Kcal" />
          <select
            className="w-full ml-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen"
            name=""
            id=""
          >
            <option>1un</option>
            <option>100g</option>
          </select>
        </div>
        {/* <Input placeholder="Modo de preparo" /> */}
        <select className="w-full ml-0.5 border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen">
          <option disabled>Modo de preparo</option>
          <option>Cozido</option>
          <option>Grelhado</option>
          <option>Frito</option>
          <option>Assado</option>
        </select>
        <div className="flex">
          <Button buttonType="tertiary" extraClass="mr-0.5">
            Salvar
          </Button>
          <Button buttonType="tertiary" extraClass="ml-0.5">
            Descartar
          </Button>
        </div>
      </div>
    </div>
  );
}
