import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey.model';
import { SurveyService} from 'src/app/services/survey/survey.service';
@Component({
  selector: 'app-encuestas-admin',
  templateUrl: './encuestas-admin.component.html',
  styleUrls: ['./encuestas-admin.component.scss']
})
export class EncuestasAdminComponent implements OnInit {

  surveys: Survey[];

  constructor(private surveyService: SurveyService) { 
  }

  ngOnInit(): void {
    this.getSurveys();
  }

  deleteSurvey(survey: Survey, i: number){
    this.surveyService.deleteSurvey(survey);
    this.surveys.splice(i, 1);
  }

  toggleSurvey(survey: Survey){
    console.log("TOGGLE");
    this.surveyService.toggleSurvey(survey);
  }

  getSurveys(){
    this.surveyService.getSurveys().subscribe(surveys =>{
      this.surveys = surveys;
    });
  }
}
