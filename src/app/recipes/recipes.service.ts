import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[] = [
    { id: 'r1', title: 'Schnitzel', imageUrl: 'https://www.destinomunique.com.br/wp-content/uploads/2016/11/Schnitzel-Receita-Segredo.jpg', ingredients: ['French Fries', 'Pork meat', 'Salad'] },
    { id: 'r2', title: 'Spaghetti', imageUrl: 'https://lh3.googleusercontent.com/proxy/URVZI8Y1gA3rsbZumuCdJLbb5P3-SANHfqU60UT81ifI7p2RiNOXnCzYiO0JKpldJttn8Bd5uBjqufFBUbZBg_g8KGAr80PLrOwWpsLebaDYWJ1iTMiu8eVeLjRV2aKoFWcpvfn9ZMVx0QJNXy8onA6zuS5URA', ingredients: ['Spaghetti', 'Meat', 'Tomatoes'] }
  ]

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id  === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
