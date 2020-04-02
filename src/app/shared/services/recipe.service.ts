import { EventEmitter } from "@angular/core";
import { Recipe } from "./../../recipes/recipe.model";

export class RecipeService {
  // selectedRecipe: Recipe;
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Test",
      "This is a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    ),
    new Recipe(
      "again",
      "This is another test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
