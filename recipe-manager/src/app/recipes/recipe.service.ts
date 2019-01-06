import { Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

import { Http } from '@angular/http';

@Injectable()

export class RecipeService {

  constructor(private shoppingListService: ShoppingListService, private http: Http) { }

  // recipeSelected = new EventEmitter<Recipe>();

  recipesListChanged = new Subject<Recipe[]>();

  // all recipes
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Easy test',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      'Easy test 2',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )];

  /* ES GEHT AUCH OHNE ID IM RECIPE-OBJEKT
  getRecipe(id: number) {
    return this.recipes.find((item) => item.id === id);
  }*/

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    // recipe.id = this.recipes.length + 1;
    this.recipes.push(recipe);
    this.recipesListChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesListChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesListChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesListChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addMultiple(ingredients);
  }


}
