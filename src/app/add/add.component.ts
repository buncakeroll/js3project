import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs'; // a library for reactive programming using observables that help in writing asynchronous code for HTTP.
import { FormBuilder, FormControl } from '@angular/forms';

// A component is a controller, which has views and logic to manage view events and navigation between components.
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  name = 'Angular';

  constructor(private firestore: AngularFirestore) {}

  recipes$: Observable<any[]>;
  recipeName: string = '';
  duration: number = 0;

  id = self.crypto.randomUUID();
  // alert("uuid: " + uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"

  nextIngredient: string = ''; // Ingredient currently being input.
  allIngredients: string[] = []; // array of ingredients for recipe to add to database.

  // Appends the ingredient to ingredients list for recipe to be added to  database.
  addIngredient() {
    this.allIngredients.push(this.nextIngredient);
    this.nextIngredient = '';
  }

  nextStep: string = ''; // step to be added to our new recipe
  allSteps: string[] = []; // Array of strings of steps of the recipe that we are adding to our database.

  // Appends the step to step list for recipe to be added to database.
  addStep() {
    this.allSteps.push(this.nextStep);
    this.nextStep = '';
  }

  // write the recipe to firebase
  addRecipe() {
    // alert(
    //   this.id +
    //     ', ' +
    //     this.recipeName +
    //     ', ' +
    //     this.duration +
    //     ', ' +
    //     this.allIngredients +
    //     ', ' +
    //     this.allSteps
    // );

    this.firestore
      .collection('recipes')
      .doc(this.id)
      .set({
        id: this.id,
        name: this.recipeName,
        duration: this.duration,
        ingredients: this.allIngredients,
        steps: this.allSteps,
      })
      .then(function () {
        alert('Recipe saved!');
      })
      .catch(function (error) {
        alert('error saving recipe: ' + error);
      });
  }
}
