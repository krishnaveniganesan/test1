import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public service:AuthService,private router:Router) {}
 
  form:FormGroup=new FormGroup({
  
    tittle: new FormControl("",Validators.required),
    description: new FormControl("",Validators.required),
  })
  
  sin() {
    
if(this.form.valid){
 
  this.service.register(this.form.value).subscribe( res=>{
  
   
    this.router.navigate(["dashbord"]);
  })
  
}
  }

}
