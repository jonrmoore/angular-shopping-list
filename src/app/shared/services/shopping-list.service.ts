import { Ingredient } from "./../ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
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

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitChange();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emitChange();
  }

  deleteIngredient() {
    this.ingredients.pop();
    this.emitChange();
  }

  clearIngredients() {
    this.ingredients = [];
    this.emitChange();
  }
}
