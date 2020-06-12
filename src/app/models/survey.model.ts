import { Question } from './question.model';

export class Survey {

    constructor(public _id?: string,
        public title?: string,
        public startDate?: string,
        public endDate?: string,
        public creationDate?: string,
        public questions?: Question[],
        public city?: string,
        public state?: string,
        public isPublish?: boolean){

    }
    
}