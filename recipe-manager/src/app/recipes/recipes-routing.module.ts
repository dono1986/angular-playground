import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
    {
      path: '', component: RecipesComponent,
      // path: 'recipes', component: RecipesComponent,
      children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent }, /* Parameter immer zuletzt, da sonst new als id-Parameter erkannt wird! */
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
      ]
    }
];

@NgModule({
    // Wir verwenden forChild(), da RecipesModule ein Kindmodul des Basismoduls (AppModule) ist
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
  })
export class RecipesRoutingModule {}
