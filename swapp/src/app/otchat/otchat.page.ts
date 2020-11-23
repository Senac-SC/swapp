import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './otchat.page.html',
  styleUrls: ['./otchat.page.scss'],
})
export class OtchatPage implements OnInit {

    messages = [
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
