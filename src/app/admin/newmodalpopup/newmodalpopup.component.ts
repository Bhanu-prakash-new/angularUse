import { Component, OnInit } from '@angular/core';
import { TablesdataComponent } from '../tablesdata/tablesdata.component';

@Component({
  selector: 'app-newmodalpopup',
  templateUrl: './newmodalpopup.component.html',
  styleUrls: ['./newmodalpopup.component.css']
})
export class NewmodalpopupComponent implements OnInit {
    private callparenst:TablesdataComponent;
  constructor() { 
//  this.callparenst = new TablesdataComponent();
  }
  callparent(data){
      console.log('finally called',data);
  }
  callchild(){
//    this.callparenst.willcome();
  }
  ngOnInit() {
  }

}
