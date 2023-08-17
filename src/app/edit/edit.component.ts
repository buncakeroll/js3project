import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

interface Recipe {
  id: string;
  name: string;
  duration: number;
  ingredients: string[];
  steps: string[];
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  id: string = '';
  recipeName: string = '';
  duration: number = 0;
  newRecipeName: string = '';
  newDuration: number = 0;
  newIngredient: string = '';
  newAllIngredients: string[] = [];
  newStep: string = '';
  newAllSteps: string[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getRecipeData(this.id);
  }

  getRecipeData(id: string) {
    this.firestore
      .collection('recipes')
      .doc(id)
      .ref.get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data() as Recipe;
          this.recipeName = data.name;
          this.duration = data.duration;
          this.newRecipeName = data.name;
          this.newDuration = data.duration;
          this.newAllIngredients = data.ingredients;
          this.newAllSteps = data.steps;
        } else {
          console.log("This document doesn't exist");
        }
      })
      .catch((error) => {
        console.log('There was an error getting your document:', error);
      });
  }

  addIngredient() {
    this.newAllIngredients.push(this.newIngredient);
    this.newIngredient = '';
  }

  addStep() {
    this.newAllSteps.push(this.newStep);
    this.newStep = '';
  }

  saveEditedRecipe() {
    this.firestore
      .collection('recipes')
      .doc(this.id)
      .set({
        id: this.id,
        name: this.newRecipeName,
        duration: this.newDuration,
        ingredients: this.newAllIngredients,
        steps: this.newAllSteps,
      })
      .then(() => {
        alert('New recipe successfully saved!');
      })
      .catch((error) => {
        alert('error saving new recipe: ' + error);
      });
  }
}
