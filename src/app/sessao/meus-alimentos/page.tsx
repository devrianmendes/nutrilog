import Food from "@/components/food/food";
import Button from "@/components/ui/form/Button";
import Subtitle from "@/components/ui/subtitle";

export default function FoodPage() {
  return (
    <main className="flex flex-col ">
      <div>
      <Subtitle>Alimentos</Subtitle>
      <select>
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
