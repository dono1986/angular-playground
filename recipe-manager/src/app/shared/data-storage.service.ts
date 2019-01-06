import {Http, Response} from '@angular/http';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, first } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';



@Injectable()
export class DataStorageService {
   constructor(private http: Http, private httpClient: HttpClient, private recipeService: RecipeService) {

   }

   saveRecipes() {
      return this.http.put('https://ng-recipe-book-8f3cd.firebaseio.com/recipes.json', this.recipeService.getRecipes()).pipe(
         catchError((error: Response) => {
            return throwError(error);
         }));
      }

   saveRecipesWithEvents() {
      return this.httpClient.put('https://ng-recipe-book-8f3cd.firebaseio.com/recipes.json',
                                 this.recipeService.getRecipes(),
                                 {observe: 'events',
                                 /* set() setzt eine Headereigenschaft, append() fügt eine neue hinzu */
                                 headers: new HttpHeaders().set('Authorization', 'MYAPIKEY')
                                 });
      }

   saveRecipesWithCustomRequest() {
         const req = new HttpRequest('PUT', 'https://ng-recipe-book-8f3cd.firebaseio.com/recipes.json',
                                            this.recipeService.getRecipes(),
                                            {reportProgress: true});
         return this.httpClient.request(req);
   }

   saveRecipesWithHttpClient() {
      return this.httpClient.put('https://ng-recipe-book-8f3cd.firebaseio.com/recipes.json', this.recipeService.getRecipes()).pipe(
         catchError((error: Response) => {
            return throwError(error);
         }));
      }

   fetchRecipesWithHttpClient() {
      // Direkter Zugriff auf die Body-Eigenschaft der Response wegen HttpClient
      this.httpClient.get<Recipe[]>('https://ng-recipe-book-8f3cd.firebaseio.com/recipes.json'

      /* Man kann in den Optionen auch angeben, was extrahiert werden soll. Möchte man die komplette
      Response, so muss man 'response' observen

      ,{
       observe: 'body',
       responseType: 'json'
      }*/

      )
      .pipe(map(
         (recipes) => {
             for (const recipe of recipes) {
               if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
             }
             return recipes;
         }
        ))
      .pipe(
            catchError((error: Response) => {
               return throwError(error);
            }))
      .subscribe((recipes: Recipe[]) => {
         this.recipeService.setRecipes(recipes);
      });
   }

   fetchRecipes() {
      this.http.get('https://ng-recipe-book-8f3cd.firebaseio.com/recipes.json')
      .pipe(map(
         (response: Response) => {
             const recipes: Recipe[] = response.json();
             for (const recipe of recipes) {
               if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
             }
             return recipes;
         }
        ))
      .pipe(
            catchError((error: Response) => {
               return throwError(error);
            }))
      .subscribe((recipes: Recipe[]) => {
         this.recipeService.setRecipes(recipes);
      });
   }
}
