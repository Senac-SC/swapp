import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authService: AuthService, public menuCtrl: MenuController) {}

  logIn(email, password){
    this.authService.SignIn(email.value,password.value)
    .then((res) => {
      
    })
    .catch((error) => {
      let msg = "";
      switch(error.code){
        case "auth/invalid-email":
          msg = "O endereço de e-mail está em um formato incorreto.";
          break;
        case "auth/user-not-found":
          msg = "O e-mail digitado não está associado a nenhum usuário do sistema";
          break;
        case "auth/wrong-password":
          msg = "Senha incorreta";
          break;
        default:
          msg = "Erro ao realizar login";
      }
      window.alert(msg);
    })


  }


  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }
  
}