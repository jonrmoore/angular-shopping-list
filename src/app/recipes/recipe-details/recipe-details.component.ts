import { RecipeService } from "./../../shared/services/recipe.service";
import { Recipe } from "./../recipe.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"]
})
export class RecipeDetailsComponent {
  @Input("recipeDetail") recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
