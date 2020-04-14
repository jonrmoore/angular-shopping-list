import { RecipeService } from "./../../shared/services/recipe.service";
import { Recipe } from "./../recipe.model";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RecipeDetailsResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipeById(+route.params["id"]);
  }
}
