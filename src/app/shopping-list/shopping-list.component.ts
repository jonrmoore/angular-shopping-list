import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Zucchini", 5),
    new Ingredient("Peaches", 10)
  ];

  constructor() {}

  ngOnInit() {}

  onNewIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onIngredientDeleted() {
    if (this.ingredients.length > 0) {
      this.ingredients.pop();
    }
  }

  onIngredientsCleared() {
    this.ingredients = [];
  }
}
