import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode = false;
  editRecipe: Recipe = null;
  id: number;

  recipeForm: FormGroup;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private recipeService: RecipeService) {

  }

  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.editRecipe = this.recipeService.getRecipe(this.id);

      recipeName = this.editRecipe.name;
      recipeDescription = this.editRecipe.description;
      recipeImagePath = this.editRecipe.imagePath;

      console.log(this.editRecipe.ingredients.length);

      if (this.editRecipe.ingredients && this.editRecipe.ingredients.length > 0) {
        for (let ingredient of this.editRecipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
          }));
        }
      }

      console.log(recipeIngredients);
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description' : new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients' : recipeIngredients
    });
  }

  /**
   * We have to outsource the fetching of the ingredient controls code, as angular doesn't understand typescript in the loop
   */
  getIngredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {

      this.id = +params['id'];
      this.editMode = params['id'] != null; // nicht null, wenn id Parameter vorhanden

      this.initForm();


    });

  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activeRoute});
  }

  onSubmit() {

    // let ingredients = this.recipeForm.get('ingredients')

    const recipe = new Recipe(
      this.recipeForm.get('name').value,
      this.recipeForm.get('description').value,
      this.recipeForm.get('imagePath').value,
      this.recipeForm.get('ingredients').value);

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);

      // Vorteil des Reactive Forms Ansatzes! Daten liegen im richtigen Format vor
      // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(recipe);
      // Vorteil des Reactive Forms Ansatzes! Daten liegen im richtigen Format vor
      // this.recipeService.addRecipe(this.id, this.recipeForm.value);
    }

    this.onCancel();
    console.log(this.recipeForm.value);
  }

  onAddIngredient() {
    const group = new FormGroup({
                    'name': new FormControl('', Validators.required),
                    'amount': new FormControl(0, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])
                    });
    (<FormArray>this.recipeForm.get('ingredients')).push(group);
  }

  onDeleteIngredient(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

}
