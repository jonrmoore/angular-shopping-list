import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListAdd } from "./shopping-list/add/add.component";
import { ShoppingListEdit } from "./shopping-list/edit/edit.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeList } from "./recipe-book/list/list.componnent";
import { RecipeItem } from "./recipe-book/item/item.component";
import { RecipeDetail } from "./recipe-book/detail/detail.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListAdd,
    ShoppingListEdit,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    RecipeBookComponent,
    HeaderComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
