import { RecipeService } from "./../../../shared/services/recipe.service";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  @Output() recipeSelected = new EventEmitter<void>();

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // onSelect(id: number) {
  //   console.log("\nonSelect called -> id", id);
  //   // this.recipeSelected.emit();
  //   // this.recipeService.recipeSelected.emit(this.recipe);
  //   this.router.navigate([this.index], { relativeTo: this.route });
  // }
}
