import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
constructor(private service:AuthService,private http:HttpClient,private router:Router) {

}

  ngOnInit(): void {
    this.getDashbord()
  }
 
datas:any;
  getDashbord() {
    this.http.get('http://localhost:3000/posts').subscribe( res=>{
      this.datas=res;
      this.router.navigate
      })
  }
  
  Delete(id:string){
    this.service.Delete(id)
    .subscribe(res=> {
      this.router.navigate(['dashbord'])
    }
 
    )
    this.getDashbord()
  }
}
