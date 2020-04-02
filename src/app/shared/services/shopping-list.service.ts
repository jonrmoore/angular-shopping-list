import { EventEmitter } from "@angular/core";
import { Ingredient } from "../ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient("Zucchini", 5),
    new Ingredient("Peaches", 10)
  ];

  private emitChange() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
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
