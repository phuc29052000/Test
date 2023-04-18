import { Component ,OnInit  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // public name = '';
  // public password = '';

      name!: string;
      password!:string;


  constructor(){

  }
 public onSubmit(){
    console.log('name = ' + this.name);
    console.log('password = ' + this.password);
    alert('Bạn đã đăng nhập thành công');
 }
}

