import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from '../Services/authentication-service.service';




@Injectable({
	providedIn: 'root'
})

export class isLoggedInGuard implements CanActivate {

	constructor(private authService : AuthenticationServiceService,private router : Router) { }
	
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if(this.authService.getCurrentUser() != undefined){
			return true;
		}
		this.router.navigate(['/notLoggedIn']);
		return false;
	}



}