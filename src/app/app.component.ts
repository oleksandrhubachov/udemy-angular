import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'udemy-angular';
  loadedFeature = 'recipe';
  onlyOdd: boolean;
  counter: number = 10;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  toggleOnlyOdd() {
    this.onlyOdd = !this.onlyOdd;
  }

}
