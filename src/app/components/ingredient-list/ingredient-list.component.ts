import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { SnackIngredient } from 'src/app/models/snack-ingredient.model';
import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale/sale.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  @Input() snackIngredients: SnackIngredient[];

  @Output() ingredientAdded = new EventEmitter();

  sales: Sale[] = [];

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.loadSales();
  }

  addToSnack(snackIngredient: SnackIngredient): void {
    this.ingredientAdded.emit(snackIngredient);
  }

  loadSales(): void {
    this.saleService.getSales().subscribe({
      next: sales => {
        this.sales = sales;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
