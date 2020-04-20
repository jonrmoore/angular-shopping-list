import { ShoppingListService } from "./../shared/services/shopping-list.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientSub: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.ingredientSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.slService.getIngredients();
      }
    );
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

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
