import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-window-user',
  templateUrl: './settings-window-user.component.html',
  styleUrls: ['./settings-window-user.component.css']
})
export class SettingsWindowUserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(route : string){
    this.router.navigate([route]);
  }

}
