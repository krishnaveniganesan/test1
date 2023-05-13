import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { CounterStore } from './counter.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  // constructor (private route:Router) {
  //   if(sessionStorage.getItem('token')) {
  //     this.route.navigate(['dashbord'])
  //   }
  // }
  // constructor(private readonly counterStore: CounterStore) {}
  // readonly count$ = this.counterStore.count$;

  // onClickAddButton() {
  //   this.counterStore.add();
  // }

}
