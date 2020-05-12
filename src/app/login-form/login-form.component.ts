import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UserService} from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userService: UserService;
  validateUserForm;

  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.userService = new UserService();
    this.validateUserForm = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(userData) {
    // Process checkout data here
    var user = this.userService.validateUser(userData);
    this.validateUserForm.reset();
    if(user.isAdmin){
      this.router.navigate(['/admin']);
    }else if(!user.isAdmin){
      this.router.navigate(['/usuario']);
    }

    console.warn('User: ', userData);
    
  }

}
