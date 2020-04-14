import { RecipeService } from "./../../shared/services/recipe.service";
import { Recipe } from "./../recipe.model";
import { Component, Input, OnInit } from "@angular/core";
import { Data, ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"],
})
export class RecipeDetailsComponent implements OnInit {
  // @Input("recipeDetail") recipe: Recipe;
  recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data["recipeDetail"];
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id);
  }
}
