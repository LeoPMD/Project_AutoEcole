import { Component, OnInit } from '@angular/core';

// declare function loadQuiz(): void;

// declare const loadQuiz: any;
// declare const deselectAnswers: any;
// declare const getSelected: any;
// declare const addEventListener: any;
declare const initData: any;

@Component({
  selector: 'app-quiz-code',
  templateUrl: './quiz-code.component.html',
  styleUrls: ['./quiz-code.component.css']
})
export class QuizCodeComponent implements OnInit {

  // monScriptQuiz!: HTMLScriptElement;

  constructor() {
    // loadQuiz();
    
  }

  ngOnInit(): void {
    initData();

    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    // loadQuiz();
    // deselectAnswers();
    // getSelected();
    // addEventListener();
  }

}
