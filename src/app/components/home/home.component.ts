import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient/ingredient.service';
import { SnackIngredient } from 'src/app/models/snack-ingredient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collapsed = true;

  ingredients: SnackIngredient[] =  [];
  snackIngredients: SnackIngredient[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.loadSnackIngredients();
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  addToSnack(snackIngredient: SnackIngredient): void {
    const ingredientExistInSnack = this.snackIngredients.find(({ingredient: {name}}) => name === snackIngredient.ingredient.name);

    if (!ingredientExistInSnack) {
      this.snackIngredients.push({...snackIngredient, quantity: 1});
    } else {
      ingredientExistInSnack.quantity += 1;
    }
  }

  removeFromSnack(snackIngredient: SnackIngredient): void {
    const finalList = [];
    this.snackIngredients.forEach(auxSnackIngredient => {
      if (auxSnackIngredient.ingredient.name !== snackIngredient.ingredient.name) {
        finalList.push(auxSnackIngredient);
      }
    });
    this.snackIngredients = finalList;
  }

  loadSnackIngredients(): void {
    this.ingredientService.getIngredients().subscribe({
      next: ingredients => {
        ingredients.forEach(ingredient => {
          this.ingredients.push(new SnackIngredient(ingredient, 0));
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
