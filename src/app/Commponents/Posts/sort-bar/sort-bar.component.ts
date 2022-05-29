import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PostServiceService } from 'src/app/Services/post-service.service';
import { PostResponse } from 'src/app/Model/post';
import { CommunityService } from 'src/app/Services/community.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.css']
})
export class SortBarComponent implements OnInit {


  @Output() sortEvent = new EventEmitter();
  @Output() sortEventCommunity = new EventEmitter();

  communityId! : number;

  constructor(
    private communityService : CommunityService,
    private postService : PostServiceService,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.communityId = params['id'];});
  }

  randomSort(){
    this.postService.getAllRandom().subscribe(
      res => {
        this.sortEvent.emit(res);
      });
      this.randomSortCommunity();
  }

  newSort(){
    this.postService.getAllNew().subscribe(
      res => {
        this.sortEvent.emit(res);
      });
      this.newSortCommunity();
  }

  topSort(){
    this.postService.getAllTop().subscribe(
      res => {
        this.sortEvent.emit(res);
      });
      this.topSortCommunity();
  }

  hotSort(){
    this.postService.getAllHot().subscribe(
      res => {
        this.sortEvent.emit(res);
      });
      this.hotSortCommunity();
  }

    randomSortCommunity(){
    this.postService.getAllRandomByCommunity(this.communityId).subscribe(
      res => {
        this.sortEventCommunity.emit(res);
      });
  }

  newSortCommunity(){
    this.postService.getAllNewByCommunity(this.communityId).subscribe(
      res => {
        this.sortEventCommunity.emit(res);
      });
  }

  topSortCommunity(){
    this.postService.getAllTopByCommunity(this.communityId).subscribe(
      res => {
        this.sortEventCommunity.emit(res);
      });
  }

  hotSortCommunity(){
    this.postService.getAllHotByCommunity(this.communityId).subscribe(
      res => {
        this.sortEventCommunity.emit(res);
      });
  }

}
