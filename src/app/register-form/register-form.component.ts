import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UserService} from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  userService: UserService;
  createUserForm;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userService = new UserService();
    this.createUserForm = this.formBuilder.group({
      user: '', 
      email: '', 
      name: '', 
      firstLastName: '', 
      secondLastName: '', 
      gender: '', 
      birthdate: '', 
      password: '', 
      city: '', 
      state: '', 
      isAdmin: false
    });

   }

  ngOnInit(): void {
  }

  onSubmit(userData) {
    console.warn('User: ', userData);
    // Process data here
    var user = this.userService.addUser(userData);
  }
}
