import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './users.component'
import { UserService } from './users.service'

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent],
    providers: [UserService],
    exports: [UserComponent]
})
export class UsersModule{}