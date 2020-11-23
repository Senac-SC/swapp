import { Component, SystemJsNgModuleLoaderConfig } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
userId
  public appPages = [
    {
      title: 'Home',
      url: '/inicio',
      icon: 'heart'
    },
    {
      title: 'Perfil',
      url: '/meuperfil',
      icon: 'person'
    },
    {
      title: 'Conversas',
      url: '/converas',
      icon: 'chatbubbles'
    },
    {
      title: 'Cadastro',
      url: '/cadastro',
      icon: 'add'
    },
    {
      title: 'Anunciar Produto',
      url: '/anunciar',
      icon: 'add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.userId= JSON.parse(localStorage.getItem("usuario")).displayName
    });
  }

  logout(){
    this.userId= null;
    this.authService.SignOut();
    this.router.navigate(["home"]);
  }
}