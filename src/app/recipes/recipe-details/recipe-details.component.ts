import { Recipe } from "./../recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"]
})
export class RecipeDetailsComponent implements OnInit {
  @Input("recipeDetail") recipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
