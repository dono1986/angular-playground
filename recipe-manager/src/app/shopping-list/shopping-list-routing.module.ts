import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';

const shoppingListRoutes: Routes = [
    {
      path: 'shopping-list',
      component: ShoppingListComponent,
      children: [{ path: 'edit', component: ShoppingEditComponent }]
    },
  ];


@NgModule({
    // Wir verwenden forChild(), da RecipesModule ein Kindmodul des Basismoduls (AppModule) ist
    imports: [RouterModule.forChild(shoppingListRoutes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {}