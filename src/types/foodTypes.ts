import { Decimal } from "@prisma/client/runtime/library";

export type NewFoodProps = {
  name: string;
  kcal: number;
  carb: number | string | null;
  prot: number | string | null;
  fat: number | string | null;
  fibr: number | string | null;
  banner: string;
  unity: string;
  quantity: number;
  prepMethod: string;
  foodGroup: string;
  visibleFat: boolean;
  publish: boolean;
};

export type StoredFoodProps = {
  id: string,
  name: string;
  kcal: string;
  banner?: string | null;
  foodCategoryId: string,
  unity: string;
  visibleFat: boolean;
  public: boolean;
  publish: boolean;
  status: string;
  prepMethod: string;
}

export type StoredNutrientsProps = {
  carb: string;
  prot: string;
  fat: string;
  fibr: string;
}

export type FullLoadedFood = StoredFoodProps & StoredNutrientsProps;