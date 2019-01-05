import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  /*@Output() ingredientAdd = new EventEmitter<Ingredient>();
  @Output() ingredientDelete = new EventEmitter<Ingredient>();
  @Output() ingredientListClear = new EventEmitter<void>();*/

 // @ViewChild('nameInput') nameInputField: ElementRef;
 // @ViewChild('amountInput') amountInputField: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  startedEditingSubscription: Subscription;
  editMode = false; // wird bearbeitet?
  editedItemIndex: number; // was wird bearbeitet?
  editedItem: Ingredient;

  @ViewChild('f') shoppingListForm: NgForm;

  ngOnInit() {
    // Reagiere auf den EditMode
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
                  'name': this.editedItem.name,
                  'amount': this.editedItem.amount
                });
      }
    );
  }

  onAdd() {
    if (this.editMode) {
      this.shoppingListService.update(this.editedItemIndex,
                                      new Ingredient( this.shoppingListForm.value.name,
                                                      this.shoppingListForm.value.amount));
      this.onClear();
    } else {
      this.shoppingListService.add(new Ingredient(this.shoppingListForm.value.name, this.shoppingListForm.value.amount));
    }
  }

  onDelete() {
    console.log('Deleting item with index: ' + this.editedItemIndex);
    this.shoppingListService.delete(this.editedItemIndex);
    this.onClear();
   // this.shoppingListService.delete(new Ingredient(this.nameInputField.nativeElement.value, this.amountInputField.nativeElement.value));
  }

  onClear() {
    this.editMode = false;
    this.editedItem = null;
    this.editedItemIndex = -1;
    this.shoppingListForm.reset();
  }

  onClearList() {
    this.shoppingListForm.reset();
    this.shoppingListService.listClear();
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }
}
