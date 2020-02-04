import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Tuscan Chicken Skillet",
      "Bacon, cream, Parmesan",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg"
    ),
    new Recipe(
      "Chilaquiles Rojos",
      "green salsa, red enchilada sauce",
      "https://cookieandkate.com/images/2019/10/best-red-chilaquiles-recipe-3-768x1154.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  sendRecipeDetails(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
