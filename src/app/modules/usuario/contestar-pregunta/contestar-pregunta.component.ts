import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-contestar-pregunta',
  templateUrl: './contestar-pregunta.component.html',
  styleUrls: ['./contestar-pregunta.component.scss']
})
export class ContestarPreguntaComponent implements OnInit {
  @Input()
  question: Question;
  
  constructor() { }

  ngOnInit(): void {
  }

}
