import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { SnackIngredientComponent } from './components/snack-ingredient/snack-ingredient.component';
import { SnackComponent } from './components/snack/snack.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientComponent,
    SnackComponent,
    IngredientListComponent,
    SnackIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
