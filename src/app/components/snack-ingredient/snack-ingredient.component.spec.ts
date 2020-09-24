import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackIngredientComponent } from './snack-ingredient.component';

describe('SnackIngredientComponent', () => {
  let component: SnackIngredientComponent;
  let fixture: ComponentFixture<SnackIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
