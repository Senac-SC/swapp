import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'listagem',
    loadChildren: () => import('./listagem/listagem.module').then( m => m.ListagemPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'anunciar',
    loadChildren: () => import('./anunciar/anunciar.module').then( m => m.AnunciarPageModule)
  },
  {
    path: 'anunciado',
    loadChildren: () => import('./anunciado/anunciado.module').then( m => m.AnunciadoPageModule)
  },
  {
    path: 'converas',
    loadChildren: () => import('./converas/converas.module').then( m => m.ConverasPageModule)
  },
  {
    path: 'meuperfil',
    loadChildren: () => import('./meuperfil/meuperfil.module').then( m => m.MeuperfilPageModule)
  },
  {
    path: 'otchat',
    loadChildren: () => import('./otchat/otchat.module').then( m => m.OtchatPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
