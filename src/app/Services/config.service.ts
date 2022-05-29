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
}