import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)

  ];

  // @Output() listChanged = new EventEmitter();
  listChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  add(ingredientElement: Ingredient) {
    this.ingredients.push(ingredientElement);
    this.listChanged.next(this.ingredients.slice());
  }

  update(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.listChanged.next(this.ingredients.slice());
  }

  addMultiple(ingredients: Ingredient[]) {
    /*for (const ingredient of ingredients) {
      this.add(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.listChanged.next(this.ingredients.slice());
  }

  delete(index: number) {
    console.log('Before:' + this.ingredients);
    this.ingredients.splice(index, 1);
    console.log('After:' + this.ingredients);
    this.listChanged.next(this.ingredients.slice());

  }

  listClear() {
    console.log('Clearing ingredients list');
     this.ingredients = []; // this.ingredients.slice(0, this.ingredients.length - 1);
     this.listChanged.next(this.ingredients.slice());

  }

}
