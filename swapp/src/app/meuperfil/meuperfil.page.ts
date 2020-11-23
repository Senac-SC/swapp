import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meuperfil',
  templateUrl: './meuperfil.page.html',
  styleUrls: ['./meuperfil.page.scss'],
})
export class MeuperfilPage implements OnInit {
  userId= JSON.parse(localStorage.getItem("usuario")).displayName
  constructor() { }

  ngOnInit() {
  }

}
