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
  subjects: Subject[] = [];
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
    }, 3000);
  }

  nextQuestion() {
    this.activeAnswer = '';
    this.previousQuestion.push(this.activeQuestion);
    var num = this.getRandomInt(this.quizQuestions.length);
    this.activeQuestion = this.quizQuestions[num];
    console.log(this.previousQuestion);
    document.getElementById('thecard').style.transform = 'rotateY(0deg)';
    document.getElementById('thefront').style.opacity = '1';
  }

  backQuestion() {
    this.activeQuestion = this.previousQuestion.pop();
  }

  submitAnswer() {
    this.activeAnswer.toLowerCase();
    var score = 1.0;
    if (this.activeQuestion.keywords.length===1 && !(this.activeAnswer.includes(this.activeQuestion.keywords[i]))) { 
      score = 0;
    } else if (this.activeQuestion.keywords.length===1 && this.activeAnswer.includes(this.activeQuestion.keywords[i])) { 
      score = 1;
    } else {
      for(var i = 0; i < this.activeQuestion.keywords.length; i++) {
        console.log(this.activeQuestion.keywords[i]);
        if(!(this.activeAnswer.includes(this.activeQuestion.keywords[i]))) {
          console.log('scr: ' + score);
          var temp = (score / (i+2));
          score = score - temp;
          console.log('score: ' + score);
        }
      }
    }
    // if(score < 0) score = 0;
    score = score + Number(this.score);
    this.score = score.toFixed(1);
    // -------------------------------------------------------SCORE ERROR-------------------------------------------------
    console.log('Score: ' + this.score);
    document.getElementById('thecard').style.transform = 'rotateY(180deg)';
    document.getElementById('thefront').style.opacity = '0';
  }

  revealAnswer() {

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
