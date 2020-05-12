import { Option } from './option.model';

export class Question{
    constructor(public id?: number,
        public title?: string,
        public options?: Option[]){
    }
    
}