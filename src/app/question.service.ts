import { Injectable } from '@angular/core';
import { WebService } from 'src/app/web.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private webService: WebService) { }

  getSubjects() {
    return this.webService.get('subjects');
  }

  createSubjects(topic: string) {
    return this.webService.post('subjects', { topic });
  }

  getQuestions(subjectId: string) {
    return this.webService.get(`subjects/${subjectId}/questions`);
  }

  createQuestions(topic: string) {
    return this.webService.post('subjects', { topic });
  }
}
