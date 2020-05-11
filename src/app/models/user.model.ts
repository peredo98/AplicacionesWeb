export class User{
    constructor(public id?: number, 
        public user?: string, 
        public email?: string, 
        public name?: string, 
        public firstLastName?: string, 
        public secondLastName?: string, 
        public gender?: string, 
        public birthdate?: string, 
        public password?: string, 
        public city?: string, 
        public state?: string, 
        public isAdmin?: boolean){

    }
}