import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostResponse } from 'src/app/Model/post';
import { DialogService } from 'src/app/Services/dialog.service';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { ConfirmDialogComponent } from '../../Alert/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-post-window',
  templateUrl: './post-window.component.html',
  styleUrls: ['./post-window.component.css']
})
export class PostWindowComponent implements OnInit {
  
  @ViewChild(ConfirmDialogComponent) dialog!: ConfirmDialogComponent;

  constructor(private route: ActivatedRoute,private postService : PostServiceService,private dialogService : DialogService) { }

  post! : PostResponse;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.getOne(params['id']).subscribe(
        res => { this.post
          = res;})
        });
        
        this.dialogService.openDialogEvent.subscribe( res => {
          if (res){
            this.showModal();
          }
        })
      }

      showModal(){
        this.dialog.element.classList.add('active');
      }
  }
