import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from './interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public ngFireAuth: AngularFireAuth, public router: Router, public ngFirestore: AngularFirestore) { 
    this.ngFireAuth.authState.subscribe( user => {
      if(user) {
        localStorage.setItem("usuario",JSON.stringify(user));
        this.router.navigate(["inicio"]);
      }
      else{
        localStorage.setItem("usuario", null);
      }
    });
  }


  get emailUser(): string{
    const user = JSON.parse(localStorage.getItem("usuario"));
    return user.email;
  }


  SignIn(email, password){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }


  SignOut(){
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem("usuario");
    })
  }


  RegisterUser(email, password, usuario){
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((result) => {


      this.createUser(result.user.uid, usuario);


    })
  }


  createUser(uid, usuario){
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('Usuarios/' + uid);
    const userData: Usuario = {
      nome: usuario.nome,
      usuario: usuario.usuario,
      datanasc: usuario.datanasc,
      telefone: usuario.telefone,
      cpf: usuario.cpf,
      cep: usuario.cep,
      email: usuario.email
    }


    return userRef.set(userData, { merge: true });


  }


}