import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/models/survey.model';
import { SurveyService} from 'src/app/services/survey/survey.service';
@Component({
  selector: 'app-estadisticas-admin',
  templateUrl: './estadisticas-admin.component.html',
  styleUrls: ['./estadisticas-admin.component.scss']
})
export class EstadisticasAdminComponent implements OnInit {

  survey: Survey;
  surveyService: SurveyService;
  sub;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router){
      this.surveyService = new SurveyService();
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
