import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mod-settings-asside',
  templateUrl: './mod-settings-asside.component.html',
  styleUrls: ['./mod-settings-asside.component.css']
})
export class ModSettingsAssideComponent implements OnInit {

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
  navigate(intent : String,event : Event){
    this.removeActive();
    (event.target as Element).classList.add('active');
    this.navigateEvent.emit(intent);
  }

}
