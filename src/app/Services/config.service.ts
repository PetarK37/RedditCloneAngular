import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService{


    private _api_url = 'http://localhost:8080/api';
    private _post_url = this._api_url + '/Posts';
    private _post_url_random = this.post_url + '/Random';
    private _post_url_new = this.post_url + '/New';
    private _post_url_top = this.post_url + '/Top';
    private _post_url_hot = this.post_url + '/Hot';
    private _communities_url = this._api_url + '/Communities';
    private _post_url_community = this._post_url + "/Community/";
    private _comment_url = this._api_url + '/Comments/';
    private _post_comments_url = this._comment_url + 'Post/';
    private _users_url = this._api_url + '/Users';
    private _login_url = this._users_url + '/login';
    private _whoami_url = this._users_url + '/auth/whoami';


    get whoami_url(){
        return this._whoami_url;
    }
    get post_url(){
        return this._post_url;
    }

    get post_url_random(){
        return this._post_url_random
    }

    get post_url_new(){
        return this._post_url_new
    }

    get post_url_top(){
        return this._post_url_top
    }

    get post_url_hot(){
        return this._post_url_hot
    }

    get communities_url(){
        return this._communities_url
    }

    get post_url_community(){
        return this._post_url_community
    }

    post_url_community_random(id:number){
        return this._post_url_community + id + "/Random"
    }

    post_url_community_hot(id:number){
        return this._post_url_community + id + "/Hot"
    }

    post_url_community_new(id:number){
        return this._post_url_community + id + "/New"
    }

    post_url_community_top(id:number){
        return this._post_url_community + id + "/Top"
    }

    get comment_url(){
        return this._comment_url
    }

    post_comments_url(id : number){
        return this._post_comments_url + id
    }

    post_comments_url_new(id : number){
        return this._post_comments_url  + id +"/New"
    }   

    post_comments_url_old(id : number){
        return this._post_comments_url  + id +"/Old"
    }   

    post_comments_url_top(id : number){
        return this._post_comments_url  + id +"/Top"
    }   

    comment_karma_url(id : number){
        return this._comment_url + id + "/Karma"
    }
 
    get users_url(){
     return this._users_url;
    } 

    get login_url(){
        return this._login_url;
    }

    editPost(id: number): string {
        return this._post_url + '/' + id;      
    }

    deletePost(id: number): string {
        return this._post_url + '/' + id;      
    }
}
