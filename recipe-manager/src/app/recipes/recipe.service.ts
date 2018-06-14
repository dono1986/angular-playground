import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();

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
    )]

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addMultiple(ingredients);
  }


}
