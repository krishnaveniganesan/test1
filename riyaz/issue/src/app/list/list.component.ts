import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
states=[
  {value:'Tamil Nadu'},
  {value:'Kerela'},
  {value:'Karanadakha'},
  {value:'Dhelhi'},
  {value:'AndraPradesh'}
];

}
