import { Component } from '@angular/core'
import {UserService} from './users.service'

@Component({
    selector: 'users',
    providers: [UserService],
    template: `
        <h1>{{username}}</h1>
    `
})
export class UserComponent{

    username: string;

    constructor(private userService: UserService ){

        this.username = this.userService.getUsername();
        
    }


}