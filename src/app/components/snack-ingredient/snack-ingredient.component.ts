import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnackIngredient } from 'src/app/models/snack-ingredient.model';

@Component({
  selector: 'app-snack-ingredient',
  templateUrl: './snack-ingredient.component.html',
  styleUrls: ['./snack-ingredient.component.css']
})
export class SnackIngredientComponent {

  @Input() snackIngredient: SnackIngredient;

  @Output() ingredientRemoved = new EventEmitter();

  modelChanged(): void {
    if (this.snackIngredient.quantity === 0) {
      this.ingredientRemoved.emit(this.snackIngredient);
    }
  }

}
