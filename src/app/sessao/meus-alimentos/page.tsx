import Food from "@/components/food/food";
import Button from "@/components/ui/button";
import Subtitle from "@/components/ui/subtitle";

export default function FoodPage() {
  return (
    <main className="flex flex-col ">
      <div className="flex justify-between">
        <Subtitle>Meus alimentos</Subtitle>
        <select className="border-solid border border-midGreen leading-7 mb-2 px-2 focus:outline-midGreen">
          <option disabled>Filtro...</option>
          <option>Todos</option>
          <option>Carnes e ovos</option>
          <option>Carboidratos</option>
          <option>Gorduras</option>
        </select>
      </div>
      <Food />
      <Button extraClass="m-auto" buttonType="primary">
        Adicionar alimento
      </Button>
    </main>
  );
}
