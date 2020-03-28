import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListAdd } from "./shopping-list/add/add.component";
import { ShoppingListEdit } from "./shopping-list/edit/edit.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListAdd,
    ShoppingListEdit,
    RecipeBookComponent,
    HeaderComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
