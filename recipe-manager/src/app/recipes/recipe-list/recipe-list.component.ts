import {Component,  OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipeListSubscription: Subscription;

  // @Output() recipeItemClicked = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    this.recipeListSubscription = this.recipeService.recipesListChanged.subscribe((recipeList: Recipe[]) => {
      this.recipes = recipeList;
    });

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
     this.recipeListSubscription.unsubscribe();
  }

  /*onRecipeItemClicked(recipeElement: Recipe) {
    this.recipeItemClicked.emit(recipeElement);
  }*/
}
