import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)

  ];

  @Output() listChanged = new EventEmitter();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  add(ingredientElement: Ingredient) {
    this.ingredients.push(ingredientElement);
    this.listChanged.emit();
  }

  addMultiple(ingredients: Ingredient[]) {
    /*for (const ingredient of ingredients) {
      this.add(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.listChanged.emit();
  }

  delete($event: Ingredient) {
    // ... TODO
  }

  listClear() {
    // this.ingredients.slice(0, this.ingredients.length - 1);
  }

}
