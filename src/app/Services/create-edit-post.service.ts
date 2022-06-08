import { Injectable } from '@angular/core';
import { CommunityResponse } from '../Model/community';
import { PostResponse } from '../Model/post';

@Injectable({
  providedIn: 'root'
})
export class CreateEditPostService {

  chooseenCommunity! : CommunityResponse | null;
  postForEdit! : PostResponse | null; 

  constructor() { }

  chooseCommunity(community : CommunityResponse | null){
    this.chooseenCommunity = community;
  }

  addPost(post : PostResponse){
    this.postForEdit = post;
  }

  reset(){
    this.chooseenCommunity = null;
    this.postForEdit = null;
  }
}
