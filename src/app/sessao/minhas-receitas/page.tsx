import Recipe from "@/components/recipe/recipe";
import Button from "@/components/ui/button";
import Subtitle from "@/components/ui/subtitle";

export default function MinhasReceitas() {
  return (
    <main className="flex flex-col">
      <Subtitle>Minhas receitas</Subtitle>
      <Recipe />
      <Button extraClass="m-auto" buttonType="primary">
        Nova receita
      </Button>
    </main>
  );
}
