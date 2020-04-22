import { ShoppingListService } from "./shopping-list.service";
import { Injectable } from "@angular/core";
import { Recipe } from "./../../recipes/recipe.model";
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      0,
      "Test",
      "This is a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        {
          name: "Apples",
          amount: 8,
        },
        {
          name: "cinnamon",
          amount: 3,
        },
        {
          name: "sugar",
          amount: 4000,
        },
      ]
    ),
    new Recipe(
      1,
      "Fish Stew",
      "This is another test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        {
          name: "Fish",
          amount: 900,
        },
        {
          name: "Mayonaise",
          amount: 30,
        },
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.slice().find((r) => r.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((r) => r.id !== id);
  }
}
