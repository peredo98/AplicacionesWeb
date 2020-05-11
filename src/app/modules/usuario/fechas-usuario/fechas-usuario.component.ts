import { Component, OnInit, Input } from '@angular/core';
import { Survey } from 'src/app/models/survey.model';
;
@Component({
  selector: 'app-fechas-usuario',
  templateUrl: './fechas-usuario.component.html',
  styleUrls: ['./fechas-usuario.component.scss']
})
export class FechasUsuarioComponent implements OnInit {
  @Input()
  survey: Survey;

  constructor() { }

  ngOnInit(): void {
  }

}
