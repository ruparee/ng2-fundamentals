/**
 * Created by erupare on 04/07/2017.
 */

import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
    currentUser:IUser
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Edgar',
            lastName: 'Rupare'
        }
    }
     isAuthenticated() {
         return !!this.currentUser;
     }
}