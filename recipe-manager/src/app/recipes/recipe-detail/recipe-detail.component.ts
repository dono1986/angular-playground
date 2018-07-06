import { Routes, Router, ActivatedRoute } from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  /*@Input() */ recipe: Recipe;

  recipeIndex = 0;

  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.recipeIndex = +this.activeRoute.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(this.recipeIndex);

    this.activeRoute.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);

    });
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
