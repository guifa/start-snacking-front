import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { SnackIngredient } from 'src/app/models/snack-ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  @Input() snackIngredient: SnackIngredient;

  @Output() ingredientAdded = new EventEmitter();

  addToSnack(snackIngredient: SnackIngredient): void {
    this.ingredientAdded.emit(snackIngredient);
  }

}
