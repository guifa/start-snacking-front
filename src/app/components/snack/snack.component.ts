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

  snackToBuy = new Snack();

  totalPrice: number;

  displayModal: boolean;

  constructor(private snackService: SnackService) { }

  calculateTotalPrice(): number {
    return this.totalPrice =  this.snackIngredients.reduce(
      (acc, snackIngredient) => acc += snackIngredient.ingredient.price * snackIngredient.quantity, 0
    );
  }

  removeFromSnack(snackIngredient: SnackIngredient): void {
    this.ingredientRemoved.emit(snackIngredient);
  }

  chooseSnack(): void {
    this.snackService.saveSnack(new Snack('Lanche Personalizado', this.snackIngredients)).subscribe({
      next: snack => {
        this.snackToBuy = snack;
        this.displayModal = true;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  snackCheckout(): void {
    this.displayModal = false;
    this.snackIngredients = [];
  }


}
