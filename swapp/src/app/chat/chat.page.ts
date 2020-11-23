import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

    messages = [
      {
        user: 'Você',
        createdAt: 141242112566,
        msg: 'Oi, tudo bem? Tenho interesse em um produto seu'


      },
      {
        user: 'Rafael',
        createdAt: 1412421125662,
        msg: 'Tudo ótimo. Qual produto?'


      },
      {
        user: 'Você',
        createdAt: 14124211256634,
        msg: 'Aquele violão brabo!'


      }
      
    ];
  
    currentUser = 'Você';
    newMsg = '';
  
  constructor() { }

  sendMessage() {
    this.messages.push({
      user: 'Você',
      createdAt: new Date().getTime(),
      msg: this.newMsg

    });

    this.newMsg = '';
    
  }
  ngOnInit() {

   
  }
}
