import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username= new FormControl('', [Validators.required, Validators.minLength(4)]);
  password= new FormControl('', [Validators.required, Validators.minLength(8)]);
}
