import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartingPageComponent, QuestionPageComponent, LandingPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  currentPage: string = "startPage";
  title = 'homePage';
  categoryList: String[] = [
    "General Knowledge",
    "Music",
    "Sports",
    "History"
  ];
  difficulties: String[] = [
    "Easy",
    "Medium",
    "Hard"
  ];
  correctAnswers: number = 0; // Initialize correctAnswers property
  showPage(page: string){
    this.currentPage = page;
  }
  updateCorrectAnswers(count: number) {
    this.correctAnswers = count; // Store the correct answers count
  }
}
