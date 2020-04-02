import { ShoppingListService } from "./../shared/services/shopping-list.service";
import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = this.slService.getIngredients();
    });
  }

  onNewIngredientAdded(ingredient: Ingredient) {
    this.slService.addIngredient(ingredient);
  }

  onIngredientDeleted() {
    if (this.ingredients.length > 0) {
      this.slService.deleteIngredient();
    }
  }

  onIngredientsCleared() {
    this.slService.clearIngredients();
  }
}
