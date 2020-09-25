import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl: string;

  constructor(private http: HttpClient) {
    this.ingredientsUrl = `${environment.apiUrl}/ingredients`;
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientsUrl);
  }
}
