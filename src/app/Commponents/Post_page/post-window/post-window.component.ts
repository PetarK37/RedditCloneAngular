import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostResponse } from 'src/app/Model/post';
import { PostServiceService } from 'src/app/Services/post-service.service';

@Component({
  selector: 'app-post-window',
  templateUrl: './post-window.component.html',
  styleUrls: ['./post-window.component.css']
})
export class PostWindowComponent implements OnInit {

  constructor(private route: ActivatedRoute,private postService : PostServiceService) { }

  post! : PostResponse;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.getOne(params['id']).subscribe(
        res => { this.post
          = res;})
        });
    }
  }
