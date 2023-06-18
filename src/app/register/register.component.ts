import { Component, forwardRef } from '@angular/core';
import { RegisterService } from './register.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private RegisterServices:RegisterService){}
  selectedOption!: string;
  fullname =new FormControl('', [Validators.required, Validators.minLength(8)]);
  phone =new FormControl('', [Validators.required, Validators.minLength(8)]);
  email =new FormControl('',[Validators.required]);
  address=new FormControl('',[Validators.required]);
  username =new FormControl('', [Validators.required, Validators.minLength(8)]);
  password= new FormControl('', [Validators.required, Validators.minLength(8)]);
  restownerfullname=new FormControl('', [Validators.required, Validators.minLength(8)]);
  restownerphon=new FormControl('', [Validators.required, Validators.minLength(8)]);
  restaurantname=new FormControl('',[Validators.required,Validators.minLength(2)]);
  restauranaddress=new FormControl('',[Validators.required])
}
