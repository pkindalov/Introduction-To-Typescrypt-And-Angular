import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
    selector: 'list',
    template: `
        <button (click)='changeListState()'>{{buttonText}}</button>
        <ul *ngIf='showList'>
            <li *ngFor='let num of numbers'>
                {{num}}
            </li>
        </ul>
    `
})

export class ListComponent implements OnInit, OnDestroy{
        numbers = [1,2,3,4,5,7,8,9];
        showList = true;
        buttonText = 'Hide';

        ngOnInit(){
            console.log('Created!');
        }

        ngOnDestroy(){
            console.log('Destroyed')
        }

        changeListState(){
            this.showList = !this.showList;

            if(this.showList){
                this.buttonText = 'Hide';
            }else{
                this.buttonText = 'Show';
            }
        }

    
}