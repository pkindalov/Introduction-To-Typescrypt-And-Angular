import { Component } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    title: string;
    secondaryTitle: string;
    titles: object

    constructor(){
        this.title = 'My beautiful Heading';
        this.secondaryTitle = 'This is uglier';
        
        this.titles = {
            title: this.title,
            secondaryTitle: this.secondaryTitle
        }
    }
}