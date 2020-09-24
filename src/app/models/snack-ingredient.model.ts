import { Ingredient } from './ingredient.model';

export class SnackIngredient {
  ingredient: Ingredient;
  quantity: number;

  constructor(ingredient: Ingredient, quantity: number) {
    this.ingredient = ingredient;
    this.quantity = quantity;
}
}
