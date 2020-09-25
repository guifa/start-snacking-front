import { SnackIngredient } from './snack-ingredient.model';

export class Snack {
  name: string;
  snackIngredients: SnackIngredient[];
  totalPrice: number;

  constructor(name?: string, snackIngredients?: SnackIngredient[]) {
    this.name = name;
    this.snackIngredients = snackIngredients;
  }
}
