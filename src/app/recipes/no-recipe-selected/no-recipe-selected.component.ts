import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-no-recipe-selected",
  templateUrl: "./no-recipe-selected.component.html",
  styleUrls: ["./no-recipe-selected.component.scss"],
})
export class NoRecipeSelectedComponent implements OnInit {
  message: string = "Please select a recipe";
  constructor() {}

  ngOnInit() {}
}
