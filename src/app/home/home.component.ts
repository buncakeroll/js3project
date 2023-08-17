import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.recipes$ = this.firestore.collection('recipes').valueChanges();
  }

  deleteRecipe(recipeId: string) {
    alert('deleteRecipe' + recipeId);

    this.firestore
      .collection('recipes')
      .doc(recipeId)
      .delete()
      .then(() => {
        alert('Recipe successfully deleted! ' + recipeId);
      })
      .catch((error) => {
        alert('error deleting recipe: ' + error);
      });
  }
}
