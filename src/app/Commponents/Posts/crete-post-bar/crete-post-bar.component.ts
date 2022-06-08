import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityResponse } from 'src/app/Model/community';
import { PostResponse } from 'src/app/Model/post';
import { CreateEditPostService } from 'src/app/Services/create-edit-post.service';

@Component({
  selector: 'app-crete-post-bar',
  templateUrl: './crete-post-bar.component.html',
  styleUrls: ['./crete-post-bar.component.css']
})
export class CretePostBarComponent implements OnInit {

  @Input() chosenCommunity! :  CommunityResponse;
  @Input() postForEdit! : PostResponse;

  constructor(    private router: Router ,private CreateEditService : CreateEditPostService    ) { }

  ngOnInit(): void {
    
  }

  openCreatePage(){
    this.router.navigate(["/Post/Create"]);
    this.CreateEditService.chooseCommunity(this.chosenCommunity);
  }

}
