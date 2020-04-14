import { NoRecipeSelectedComponent } from "./recipes/no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailsResolver } from "./recipes/recipe-details/recipe-details-resolver.service";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: NoRecipeSelectedComponent },
      {
        path: ":id",
        component: RecipeDetailsComponent,
        resolve: { recipeDetail: RecipeDetailsResolver },
      },
    ],
  },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "error", component: ErrorPageComponent },
  { path: "**", redirectTo: "/error", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
