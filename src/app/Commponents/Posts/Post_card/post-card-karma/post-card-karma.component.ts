import { AfterContentChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { ReactionRequest } from 'src/app/Model/reaction';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { ReactionService } from 'src/app/Services/reaction.service';

@Component({
  selector: 'app-post-card-karma',
  templateUrl: './post-card-karma.component.html',
  styleUrls: ['./post-card-karma.component.css']
})
export class PostCardKarmaComponent implements OnInit{

  @Input() post!: PostResponse;
  @ViewChild('upvoteElement') upvoteHtml!: ElementRef;
  @ViewChild('downovoteElement') downvoteHtml!: ElementRef;



  constructor(private reactionService : ReactionService,private postService : PostServiceService,private authService : AuthenticationServiceService) { }


  ngOnInit(): void {
    this.reactionService.getMyReaction(this.post.id).subscribe(reaction => {
      if(reaction.type == 'UPWOTE'){
        this.upvoteHtml.nativeElement.setAttribute('upvoted' , true);
        return;
      }
      if(reaction.type == 'DOWNWOTE'){
        this.downvoteHtml.nativeElement.setAttribute('downvoted' , true);
        return;
      }
    });

    this.authService.changedEvent.subscribe(res => {
      if(res){
        if(!this.authService.isLoggedIn()){

        this.upvoteHtml.nativeElement.setAttribute('upvoted' , false);
        this.downvoteHtml.nativeElement.setAttribute('downvoted' , false);
      }}
    });
  }




  upvote(){
    if(this.authService.isLoggedIn()){
    const dto : ReactionRequest = {
      reactedPostId: this.post.id,
      type: 'UPWOTE',
      reactedCommentId : null,
      belongsToCommunity : this.post.community.id
    }

    if(this.upvoteHtml.nativeElement.getAttribute('upvoted') == 'true'){
      dto.type = null;
    }

    this.reactionService.saveReaction(dto).subscribe(reaction => {
      this.upvoteHtml.nativeElement.setAttribute('upvoted' , !(this.upvoteHtml.nativeElement.getAttribute('upvoted') == 'true'));
      this.downvoteHtml.nativeElement.setAttribute('downvoted' , false);
      this.postService.getOne(this.post.id).subscribe(post => {
        this.post = post;
      });});
    }
  }

  downvote(){
    if(this.authService.isLoggedIn()){
        const dto : ReactionRequest = {
      reactedPostId: this.post.id,
      type: 'DOWNWOTE',
      reactedCommentId : null,
      belongsToCommunity : this.post.community.id
    }

    
    if(this.downvoteHtml.nativeElement.getAttribute('downvoted') == 'true'){
      dto.type = null;
    }

    this.reactionService.saveReaction(dto).subscribe(reaction => {
      this.downvoteHtml.nativeElement.setAttribute('downvoted' , !(this.downvoteHtml.nativeElement.getAttribute('downvoted') == 'true'));
      this.upvoteHtml.nativeElement.setAttribute('upvoted' , false);
        this.postService.getOne(this.post.id).subscribe(post => {
          this.post = post;
        });
  } );
  }
}
}
