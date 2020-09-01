import { Component, OnInit } from '@angular/core';
import Subject from '../modules/subject';
import Question from 'src/app/modules/question';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { ArrayDataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: Question[] = [];
  subjects: Subject[] = []; //Variable for all the subjects
  selectedSubjects: Subject[] = [];
  quizQuestions: Question[] = [];
  activeQuestion: Question = {
    _id: "",
    question: "",
    answer: "",
    keywords: [""],
    _subjectId: "",
    isApproved: false
  };
  activeAnswer: String;
  previousQuestion: Question[] = [];
  score: String = '0';

  constructor(private questionService: QuestionService) { }

  //questionService gets list of subjects frpm server
  ngOnInit() {
    this.questionService.getSubjects()
      .subscribe((subjects: Subject[]) => {
        this.subjects = subjects;
        console.log(subjects);
      });
  }

  getSelectedSubjects(subject) {
    if(subject.isActive === true) {
      this.selectedSubjects.push(subject);
    } 
    if(subject.isActive === false) {
      var index = this.selectedSubjects.indexOf(subject);
      this.selectedSubjects.splice(index,1);
    } 
    console.log(this.selectedSubjects);
  }

  //Submit button functions
  //Gets all questions of the selected subjects
  getQuizQuestions() {
    for(var i = 0; i < this.selectedSubjects.length; i++) {
      this.questionService.getQuestions(this.selectedSubjects[i]._id)
        .subscribe((questions: Question[]) => {
          for(var j = 0; j < questions.length; j++) {
            this.quizQuestions.push(questions[j]);
          }
        });
    }
    setTimeout(() => { 
      document.getElementById('flash-card').style.display = 'grid';
      this.nextQuestion();
    }, 1000);
  }

  nextQuestion() {
    this.activeAnswer = '';
    this.previousQuestion.push(this.activeQuestion);
    var num = this.getRandomInt(this.quizQuestions.length);
    this.activeQuestion = this.quizQuestions[num];
    console.log(this.previousQuestion);
    document.getElementById('thecard').style.transform = 'rotateY(0deg)';
    document.getElementById('front-answer-textarea').style.opacity = '1';
    document.getElementById('theback').style.opacity = '0';
  }

  backQuestion() {
    this.activeQuestion = this.previousQuestion.pop();
  }

  submitAnswer() {
    this.activeAnswer.toLowerCase();
    var score = 0;
    console.log('length: ' + this.activeQuestion.keywords.length);
    console.log('boolean: ' + this.activeAnswer.includes(this.activeQuestion.keywords[0]));
    if (this.activeAnswer.length === 0) {
      score = 0;
    } else if (this.activeQuestion.keywords.length===1 && !(this.activeAnswer.includes(this.activeQuestion.keywords[0]))) { 
      score = 0;
    } else if (this.activeQuestion.keywords.length === 1 && this.activeAnswer.includes(this.activeQuestion.keywords[0])) { 
      score = 1;
    } else {
      var point = 1 / this.activeQuestion.keywords.length;
      for(var i = 0; i < this.activeQuestion.keywords.length; i++) {
        console.log(this.activeQuestion.keywords[i]);
        if(this.activeAnswer.includes(this.activeQuestion.keywords[i])) {
          score = score + point;
          console.log('scr ' + score);
        }
      }
    }
    score = score + Number(this.score);
    this.score = score.toFixed(1);
    // -------------------------------------------------------SCORE ERROR-------------------------------------------------
    console.log('Score: ' + this.score);
    document.getElementById('thecard').style.transform = 'rotateY(180deg)';
    document.getElementById('front-answer-textarea').style.opacity = '0';
    document.getElementById('theback').style.opacity = '1';
  }

  revealAnswer() {

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
