import { ShoppingListService } from "./shopping-list.service";
import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./../../recipes/recipe.model";
import { Ingredient } from "../ingredient.model";

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Test",
      "This is a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        {
          name: "Apples",
          amount: 8
        },
        {
          name: "cinnamon",
          amount: 3
        },
        {
          name: "sugar",
          amount: 4000
        }
      ]
    ),
    new Recipe(
      "Fish Stew",
      "This is another test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        {
          name: "Fish",
          amount: 900
        },
        {
          name: "Mayonaise",
          amount: 30
        }
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}