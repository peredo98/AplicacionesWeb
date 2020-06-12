import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { SurveyService } from 'src/app/services/survey/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-encuestas',
  templateUrl: './crear-encuestas.component.html',
  styleUrls: ['./crear-encuestas.component.scss']
})
export class CrearEncuestasComponent implements OnInit {
  createSurveyForm;

  constructor(private formBuilder: FormBuilder, private router: Router, private surveyService: SurveyService) {

    this.createSurveyForm = this.formBuilder.group({
      question : '',
      option1 : '',
      option2 : '',
      option3 : '',
      option4 : '',
    });
  }

  ngOnInit(): void {

  }

  onSubmit(surveyData) {
    console.warn('Survey: ', surveyData);
    
  }

}
