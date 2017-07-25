import { Injectable } from '@angular/core'

@Injectable()
export class MailService{
    sendMail(title: string, recipient: string, message: string){
        console.log('Mail sent to: ' + recipient);
        console.log('Title of message ' + title);
    }
}