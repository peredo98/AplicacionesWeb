import { Component, OnInit, Input } from '@angular/core';
import { Survey } from 'src/app/models/survey.model';

@Component({
  selector: 'app-fechas-admin',
  templateUrl: './fechas-admin.component.html',
  styleUrls: ['./fechas-admin.component.scss']
})
export class FechasAdminComponent implements OnInit {
  @Input()
  survey: Survey;

  constructor() { }

  ngOnInit(): void {
    console.log(this.survey.creationDate);
  }

}
