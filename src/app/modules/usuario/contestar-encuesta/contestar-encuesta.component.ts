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

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router, private surveyService: SurveyService){
  }

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
        var id = +params.get('id'); 
        this.survey = this.getSurveyById(id);
    });
  }

  getSurveyById(id: number): Survey {
    var retSurvey = new Survey();
    this.surveyService.getSurveys().subscribe(surveys =>{
      surveys.forEach(function (survey) {
        if(id == survey.id){
          retSurvey = survey;
        }
      }); 
    });
    return retSurvey;
  }
}
