import { RecipeService } from "./../../../shared/services/recipe.service";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    console.log("\nonSelect called -> recipe", this.recipe);
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
