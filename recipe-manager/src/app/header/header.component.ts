import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DataStorageService } from './../shared/data-storage.service';
import {Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';
import {Response} from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  saveDataWithHttpClient() {
    this.dataStorageService.saveRecipesWithHttpClient().subscribe((res: Response) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });

  }

  saveDataWithCustomRequest() {
    this.dataStorageService.saveRecipesWithCustomRequest().subscribe((res) => {
      if (res.type === HttpEventType.Sent) {
        console.log('Message was sent: ' + res);
      }
      if (res.type === HttpEventType.Response) {
        console.log(res);
      }
    }, (error) => {
      console.log(error);
    });
  }

  saveDataWithEvents() {
    this.dataStorageService.saveRecipesWithEvents().subscribe((res: HttpEvent<Object>) => {
      if (res.type === HttpEventType.Sent) {
        console.log('Message was sent: ' + res);
      }
      if (res.type === HttpEventType.Response) {
        console.log(res);
      }
    }, (error) => {
      console.log(error);
    });
  }

  saveData() {
    this.dataStorageService.saveRecipes().subscribe((res: Response) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });

  }

  fetchData() {
    this.dataStorageService.fetchRecipesWithHttpClient();
  }

}
