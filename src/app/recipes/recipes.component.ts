import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Recipe } from "./recipe.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
