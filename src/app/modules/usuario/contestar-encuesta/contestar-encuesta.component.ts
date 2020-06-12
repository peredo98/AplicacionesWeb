import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey.model';
import { SurveyService } from 'src/app/services/survey/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contestar-encuesta',
  templateUrl: './contestar-encuesta.component.html',
  styleUrls: ['./contestar-encuesta.component.scss']
})
export class ContestarEncuestaComponent implements OnInit {
  survey: Survey;
  sub;
  selectedOptions: [];

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router, private surveyService: SurveyService){
  }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
        var id = params.get('id'); 
        this.getSurveyById(id);
    });
  }

  getSurveyById(id: String) {
  
    this.surveyService.getSurveyByID(id).subscribe(survey => {
      this.survey = survey;
      console.log(this.survey);
    });
  }

  AnswerSurvey() {
    /*
    this.surveyService.addVotes(id).subscribe(survey => {
      this.survey = survey;
      console.log(this.survey);
    });
    */
  }

  radioChangeHandler(event: any){
    const selectedOption = event.target.value;
    // this.selectedOptions.push(selectedOption);
  }

  onSubmit(){

    this.survey.questions.forEach(question => {

    })
    
  }
}
