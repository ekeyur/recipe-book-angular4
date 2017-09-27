import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

Injectable()
export class AuthGuard{
    constructor(private authService: AuthService){}
    
//    canActivate():  Observable<boolean>|Promise<boolean>|boolean {
//         return this.authService.isAuthenticated();
    
//     }
}