import { FormControl, FormGroup } from "@angular/forms";
import { Ingredient } from "../models/ingredient.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Form } from "@angular/forms";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient("Zucchini", 5),
    new Ingredient("Peaches", 10),
  ];

  private emitChange() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(form: FormGroup) {
    const {
      value: { name, amount },
    } = form;
    this.ingredients.push(new Ingredient(name, amount));
    this.emitChange();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitChange();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.emitChange();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.emitChange();
  }
}
