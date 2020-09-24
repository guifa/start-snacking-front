import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient/ingredient.service';
import { SnackIngredient } from 'src/app/models/snack-ingredient.model';
import { SnackService } from 'src/app/services/snack/snack.service';
import { Snack } from 'src/app/models/snack.model';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent {

  @Input() snackIngredients: SnackIngredient[] = [];

  @Output() ingredientRemoved = new EventEmitter();

  constructor(private snackService: SnackService) { }

  calculateTotalPrice(): number {
    return this.snackIngredients.reduce(
      (acc, snackIngredient) => acc += snackIngredient.ingredient.price * snackIngredient.quantity, 0
    );
  }

  removeFromSnack(snackIngredient: SnackIngredient): void {
    this.ingredientRemoved.emit(snackIngredient);
  }

  snackCheckout(): void {
    this.snackService.saveSnack(new Snack('Lanche Personalizado', this.snackIngredients)).subscribe({
      next: snack => {
        console.log(snack);
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
