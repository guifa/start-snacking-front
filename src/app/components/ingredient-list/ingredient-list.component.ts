import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { SnackIngredient } from 'src/app/models/snack-ingredient.model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {

  @Input() snackIngredients: SnackIngredient[];

  @Output() ingredientAdded = new EventEmitter();

  addToSnack(snackIngredient: SnackIngredient): void {
    this.ingredientAdded.emit(snackIngredient);
  }
}
