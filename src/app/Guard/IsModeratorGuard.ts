import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationServiceService } from '../Services/authentication-service.service';
import { Observable } from 'rxjs';
import { CommunityResponse } from '../Model/community';
import { CommunityService } from '../Services/community.service';


@Injectable({
	providedIn: 'root'
})

export class isModeratorGuard implements CanActivate {

    comunity! : CommunityResponse;    

    constructor(private authService : AuthenticationServiceService ,private router : Router,private communityService : CommunityService) {}
    
    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.communityService.getOne(route.params['id']).subscribe( res => {   
            this.comunity = res;
            if (this.comunity != undefined){
                for (let i = 0; i < this.comunity.moderators.length; i++) {
                   if (this.comunity.moderators[i].user.id === this.authService.getCurrentUser().id){
                       return;
                    }
                    if( i === this.comunity.moderators.length - 1){
                     this.router.navigate(['/NotAuthorized']);
                     return;
                    }
                }
            }
        })
        return true;
    }
}