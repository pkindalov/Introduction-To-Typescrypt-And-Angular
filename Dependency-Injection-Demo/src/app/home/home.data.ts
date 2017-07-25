import { Injectable } from '@angular/core'


class Article{

    constructor(
        public title:string, 
        public description:string){}
}


@Injectable()
export class HomeData{
    getData() :Array<Article>{

        return [
            {title: 'title1', description: 'description1'},
            {title: 'title2', description: 'description2'},
            {title: 'title3', description: 'description3'}
        ]

    }
}