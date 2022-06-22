import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationServiceService } from '../Services/authentication-service.service';


@Injectable({
	providedIn: 'root'
})

export class RoleGuard implements CanActivate {
    
    constructor(private authService : AuthenticationServiceService ,private router : Router) { }
	
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {

        const expectedRoles: string = route.data['expectedRoles'];
		const token = localStorage.getItem('JWT');
		const jwt: JwtHelperService = new JwtHelperService();

        if (!token) {
			this.router.navigate(['/notLoggedIn']);
			return false;
		}

        const info = jwt.decodeToken(token);
		const roles: string[] = expectedRoles.split('|', 2);

        
		if (roles.indexOf(info.role.authority) === -1) {
			this.router.navigate(['/NotAuthorized']);
			return false;
		}

		if(info.exp > new Date().getTime()){
			this.router.navigate(['/NotAuthorized']);
			return false;
		}
		return true;
    }
    
}