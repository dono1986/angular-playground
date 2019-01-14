import { CoreModule } from './core/core.module';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListService} from './shopping-list/shopping-list.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeService} from './recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    ],
  imports: [
    ShoppingListModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
