import { ShoppingListService } from "./../../shared/services/shopping-list.service";
import { Ingredient } from "../../shared/models/ingredient.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators as V } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editRecipeForm: FormGroup;
  ingredientListener: Observable<number>;
  editSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) {}

  // @ViewChild("nameInput", { static: false }) nameInput: ElementRef;
  // @ViewChild("amountInput", { static: false }) amountInput: ElementRef;

  ngOnInit() {
    this.editSubscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        let { name, amount } = this.editedItem;
        this.editRecipeForm.setValue({ name, amount });
      }
    );
    this.editRecipeForm = new FormGroup({
      name: new FormControl("", [V.required, V.minLength(3)]),
      amount: new FormControl(null, [
        V.required,
        V.max(100),
        V.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });
    this.editRecipeForm.valueChanges.subscribe((changes) =>
      console.log(changes)
    );
    this.editRecipeForm.statusChanges.subscribe((changes) =>
      console.log(changes)
    );
  }

  onAdd() {
    const {
      value: { name, amount },
    } = this.editRecipeForm;
    const newIngredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(this.editRecipeForm);
    }
    this.editRecipeForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.editRecipeForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }
}
