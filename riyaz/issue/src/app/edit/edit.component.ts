import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  forms:any=    {
    tittle: "",
    description: "",
    
   
  }
  constructor(private service:AuthService,private route: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.forms = data;
    });
}
update() {
  this.service.update(this.forms)
  .subscribe({
    next:(data) => {
      this.router.navigate(["dashbord"]);
    },
    error:(err) => {
      console.log(err);
    }
  })
}
}