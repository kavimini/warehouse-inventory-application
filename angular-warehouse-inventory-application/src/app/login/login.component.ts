import { Component } from '@angular/core';
import { User } from './data/user';
import { UserStatus } from './data/userstatus';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../common/auth-service';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userStatus: UserStatus | any;

  userNotFound: boolean = false;
  message: string = '';
  showMessage: boolean = false;
  password:string='';

  user: User = {
    id: 0,  
    username: '',
    name:'',
    role:''
  };

  constructor(private loginService: LoginService,private router: Router,private authService: AuthService) {} 

  ngOnInit() {
  }

  submitForm() {
    this.loginService.getData(this.user).subscribe(
      (data: UserStatus) => {
        if(data.userExists === true){
          this.authService.setRole(data.roleName);
          this.setPageForRole(data.roleName);
        } else {
          this.message = "Username doesnt exist. Try again !!";
          this.showMessage = true;
          this.userNotFound = true;
          setTimeout(() => {
            this.showMessage = false; 
          }, 7000);
        }
      }
    );
  }

  setPageForRole(roleName: string) {
    if(roleName === 'Operator'){
      this.router.navigate(['/inbound']);
    } else {
      this.router.navigate(['/inventory']);
    }

  }

}
