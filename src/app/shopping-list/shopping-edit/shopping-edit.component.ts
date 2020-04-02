import { Ingredient } from "./../../shared/ingredient.model";
import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent {
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<void>();
  @Output() ingredientsCleared = new EventEmitter<void>();

  @ViewChild("nameInput", { static: false }) nameInput: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInput: ElementRef;

  onAdd() {
    this.newIngredientAdded.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
  }

  onDelete() {
    this.ingredientDeleted.emit();
  }

  onClear() {
    this.ingredientsCleared.emit();
  }
}
