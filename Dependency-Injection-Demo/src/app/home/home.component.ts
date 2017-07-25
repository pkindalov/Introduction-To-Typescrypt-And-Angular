import { Component, OnInit } from '@angular/core'
import { HomeData } from './home.data' 
import { MailService } from './mailService.component'

@Component({
    selector: 'home',
    providers: [HomeData, MailService],
    template: `
        <h1>Home - {{articles.length}}</h1>
    `
})

export class HomeComponent implements OnInit{

    articles;

    constructor(
        private homeData: HomeData,
        private mailService: MailService
    ){ }

    ngOnInit(){
        this.articles = this.homeData.getData();
        this.mailService.sendMail('cool message', 'someone', 'this is very cool app');
    }

}