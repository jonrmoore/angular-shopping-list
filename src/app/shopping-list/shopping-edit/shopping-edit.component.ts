import { Ingredient } from "./../../shared/ingredient.model";
import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  ElementRef,
} from "@angular/core";
import { FormControl, FormGroup, Validators as V } from "@angular/forms";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit {
  editRecipeForm: FormGroup;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<void>();
  @Output() ingredientsCleared = new EventEmitter<void>();

  // @ViewChild("nameInput", { static: false }) nameInput: ElementRef;
  // @ViewChild("amountInput", { static: false }) amountInput: ElementRef;

  ngOnInit() {
    this.editRecipeForm = new FormGroup({
      name: new FormControl("", [V.required, V.minLength(3)]),
      amount: new FormControl(0, [V.required, V.min(0), V.max(100)]),
    });
    this.editRecipeForm.valueChanges.subscribe((changes) =>
      console.log(changes)
    );
    this.editRecipeForm.statusChanges.subscribe((changes) =>
      console.log(changes)
    );
  }

  onAdd() {
    this.newIngredientAdded.emit(this.editRecipeForm.value);
  }

  onDelete() {
    this.ingredientDeleted.emit();
  }

  onClear() {
    this.ingredientsCleared.emit();
  }

  validAmount(control: FormControl): { [s: string]: boolean } {
    console.log("control.value: ", control.value);
    let { amount } = control.value;
    if (amount >= 0 && amount <= 100) {
      return { hasValidAmount: true };
    }
    return null;
  }
}
