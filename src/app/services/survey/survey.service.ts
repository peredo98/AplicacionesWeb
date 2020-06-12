import { Injectable } from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
import { Survey } from 'src/app/models/survey.model';
import { Question } from 'src/app/models/question.model';
import { Option } from 'src/app/models/option.model';

import {HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators'

  @Injectable({
    providedIn: 'root'
  })
  export class SurveyService {

    endpoint = 'http://localhost:8080/api/surveys';
    surveys:Survey[];

    headerDict = {
      'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
    }
      
    requestOptions = {
      headers: new HttpHeaders(this.headerDict),
    }; 

    handleError(error: HttpErrorResponse){
      let errorMessage = "Unknown error!";
      if(error.error instanceof ErrorEvent){
        errorMessage = `Error: ${error.error.message}`;
      }else{
        errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }

  //   getSurveys():Observable<Survey[]>{
  //     this.surveys = [new Survey(123,'Presidente','10/05/2020', '20/05/2020', '10/05/2020', [new Question(10, "¿Por quién votarás de presidente?", [new Option(741, "Andres Manuel López Obrador", 120), new Option(852, "Ricardo Anaya", 50), new Option(963, "Meade", 40), new Option(147, "Jaime Rodriguez Calderon", 10)]),
  //                                                                                            new Question(11, "¿Estás a gusto con el presidente actual?", [new Option(150, "Si", 60), new Option(151, "No", 96), new Option(152, "Me da igual", 44), new Option(153, "No se", 23)])], 'Cdmx', 'Cdmx', true),
  //                     new Survey(456,'Costo de servicios','03/02/2020', '03/03/2020', '03/01/2020', [new Question(20, "¿Cuánto pagas de servicios mensualemente?", [new Option(510, "Menos de $300", 30), new Option(511, "Entre 300 y 500", 110), new Option(512, "500 y 700", 60), new Option(513, "Mas de 700", 55)]),
  //                                                                                                    new Question(21, "¿Cómo te parece la calidad de servicios que recibes?", [new Option(800, "Muy bueno", 30), new Option(801, "Bueno", 40), new Option(802, "Malo", 125), new Option(803, "Muy malo", 98)])], 'Cuernava', 'Morelos', false),
  //                     new Survey(789,'Pago de impuestos','10/12/2019', '11/01/2020', '05/12/2019', [new Question(30, "¿Te parece alta la cantidad de impuestos que pagas?", [new Option(600, "Me parece justo", 50), new Option(601, "Se me hace baja", 5), new Option(602, "Se me hace alta", 95), new Option(603, "No se", 15)]),
  //                                                                                                   new Question(31, "¿Sabes que se hace con los impuestos que pagas?", [new Option(610, "Si", 70), new Option(611, "No", 65), new Option(612, "No estoy seguro", 80), new Option(613, "Me da igual", 30)])], 'Cdmx', 'Cdmx', false),
  //                     new Survey(928,'Servicios públicos','09/11/2019', '20/11/2019', '05/11/2019', [new Question(40, "¿Cómo te parece la calidad de servicios públicos en tu ciudad?", [new Option(800, "Muy bueno", 30), new Option(801, "Bueno", 40), new Option(802, "Malo", 125), new Option(803, "Muy malo", 98)])], 'Cdmx', 'Cdmx', true)];
  //    return of(this.surveys);
  //  }


      getSurveys():Observable<any>{

        return this.http
        .get(this.endpoint, this.requestOptions);
        // .pipe(map(this.extractData), retry(3), catchError(this.handleError));
      }

      getSurveyByID(id: String){ 

        return this.http
        .get(this.endpoint + '/' + id, this.requestOptions);
      }

      deleteSurvey(survey: Survey){
        this.http
        .delete(this.endpoint + '/' + survey._id, this.requestOptions).subscribe(_ => { 
          this.surveys.forEach( (item, index) => {
            if(item._id == survey._id) this.surveys.splice(index,1);
          });
        });
      }

      toggleSurvey(survey: Survey){

        this.http.put(this.endpoint + '/' + survey._id + '/turn', this.requestOptions).subscribe(_ => {
          survey.isPublish = !survey.isPublish
        })
      }

      toggleResults(survey: Survey){

        this.http.put(this.endpoint + '/' + survey._id + '/results', this.requestOptions).subscribe(_ => {
          survey.resultsPublish = !survey.resultsPublish
        })
      }


      addVotes(survey: Survey, selectedOptions){

        console.log("VOTANDO");

        let obj = {};
        obj = {"selectedOptions" : selectedOptions};
        console.log(obj);
        const body = JSON.stringify(obj, null, 1);

        console.log(body);

        return this.http.put(this.endpoint + '/' + survey._id + '/addVotes', body ,this.requestOptions).subscribe(_ => {
          console.log("DONE");
        })
      }

      
      addSurvey(newSurvey: String){

        const survey = JSON.stringify(newSurvey);

        console.log(survey);

        return this.http.post<Survey>(this.endpoint, survey, this.requestOptions);
      }



      // createSurvey(survey: Survey){
        
      // }

      constructor(private http: HttpClient) { 

      }
    }
