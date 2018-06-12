import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdd = new EventEmitter<Ingredient>();
  @Output() ingredientDelete = new EventEmitter<Ingredient>();
  @Output() ingredientListClear = new EventEmitter<void>();

  @ViewChild('nameInput') nameInputField: ElementRef;
  @ViewChild('amountInput') amountInputField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
      this.ingredientAdd.emit(new Ingredient(this.nameInputField.nativeElement.value, this.amountInputField.nativeElement.value));
  }

  onDelete() {
    this.ingredientDelete.emit(new Ingredient(this.nameInputField.nativeElement.value, this.amountInputField.nativeElement.value));
  }

  onClear() {
    this.ingredientAdd.emit();
  }
}
