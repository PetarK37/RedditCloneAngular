import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-settings-sidebar',
  templateUrl: './user-settings-sidebar.component.html',
  styleUrls: ['./user-settings-sidebar.component.css']
})
export class UserSettingsSidebarComponent implements OnInit {

  @Output() navigateEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeActive(){
    var lis = document.getElementsByTagName("li");
    for(var i = 0; i < lis.length; i++){
      lis[i].classList.remove('active');
    }
  }
  navigate(event: Event){
    this.removeActive();
    (event.target as Element).classList.add('active');
    this.navigateEvent.emit((event.target as Element).id);
  }

}
