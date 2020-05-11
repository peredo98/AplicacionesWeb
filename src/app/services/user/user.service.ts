import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[];

  getUsers():Observable<User[]>{
    this.users = [new User(123, 'usuario123', 'usuario123@gmail.com', 'Luis', 'Rodriguez', 'Gonzalez', 'M', '01/02/1990', 'password123', 'Cdmx', 'Cdmx', false),
                  new User(456,'321usuario','321usuario@gmail.com','Jose', 'Robles', 'Lopez', 'M', '01/03/1992', '123password', 'Cdmx', 'Cdmx', true),
                  new User(789, 'otrousuario','otrousuario@gmail.com','Susana', 'Fernandez', 'Escobar', 'F', '01/03/1889', 'mipass', 'Tampico', 'Tamaulipas', false),
                         
                         ];
   return of(this.users);
 }

 addUser(user: User):void{
   this.users.push(user)
 }

  constructor() { }
}
