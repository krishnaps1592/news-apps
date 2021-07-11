import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] =[];
  constructor() { }

  add(messageVal:string):void{
    this.messages.push(messageVal);
  }

  clear():void{
    this.messages = [];
  }
}
