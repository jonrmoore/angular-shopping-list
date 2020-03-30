import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit() {}
  onRecipeSelected(recipe: Recipe) {
    console.log("\nrecipe-list.onRecipeSelected() -> recipe: ", recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
