import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

export interface QuestionType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-encuesta',
  templateUrl: './form-encuesta.component.html',
  styleUrls: ['./form-encuesta.component.scss']
})
export class FormEncuestaComponent implements OnInit {
 surveyForm: FormGroup;

  selectedOption = [];

  editMode = false;
  surveyTypes = [
    { id: 0, value: 'Training' },
    { id: 1, value: 'HR' }
  ];


  questions: QuestionType[] = [
    { value: 'Single choice', viewValue: 'Single choice' },
  ];


  constructor(
    // private surveyService: SurveyService,

  ) { }

  ngOnInit() {
    this.initForm();

  }

  private initForm() {
    let surveyTitle = '';
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      'surveyTitle': new FormControl(surveyTitle),
      'surveyQuestions': surveyQuestions,
    });

    this.onAddQuestion();

  }

  onAddQuestion() {
    console.log(this.surveyForm);
   
    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl(''),
      'questionGroup': new FormGroup({})
    });

    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);

    this.selectedOption.push('Single choice');
    
    this.onSeletQuestionType('Single choice', (<FormArray>this.surveyForm.get('surveyQuestions')).length - 1);
  }

  onRemoveQuestion(index) {

  
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index,1)
    console.log(this.surveyForm);

  }


  onSeletQuestionType(questionType, index) {
    if (questionType === 'Single choice' || questionType === 'Multi choice') {
      this.addOptionControls(questionType, index)
    }
  }

  addOptionControls(questionType, index) {

    let options = new FormArray([]);


    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);


    this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

    this.addOption(index);
    this.addOption(index);
  }


  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }


  addOption(index) {
    const optionGroup = new FormGroup({
      'optionText': new FormControl(''),
    });
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }


  postSurvey() {


  }


  onSubmit() {

    this.postSurvey();

  }


}