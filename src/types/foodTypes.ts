import { Decimal } from "@prisma/client/runtime/library";

export type NewFoodProps = {
  name: string;
  kcal: number;
  carb: number;
  prot: number;
  gord: number;
  fibr: number;
  banner: string;
  unity: string;
  quantity: number;
  prepareMode: string;
  foodGroup: string;
  visibleFat: boolean;
  publish: boolean;
};

export type StoredFoodProps = {
  name: string;
  calories: Decimal | string;
  banner?: string | null;
  foodCategoryId: string,
  unity: string;
  visibleFat: boolean;
  public: boolean;
  publish: boolean;
  status: string;
}