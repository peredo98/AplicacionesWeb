import { Question } from './question.model';

export class Survey {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    creationDate: string;
    questions: Question[];
    city: string;
    state: string;
}