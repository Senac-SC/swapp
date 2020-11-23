import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Produto } from './interfaces/produto';


@Injectable({
  providedIn: 'root'
})
export class CrudprodService {


  constructor(public ngFireAuth: AngularFireAuth, public router: Router, public ngFirestore: AngularFirestore) { 
    this.ngFireAuth.authState.subscribe( user => {
      if(user) {
        localStorage.setItem("produto",JSON.stringify(user));
        this.router.navigate(["inicio"]);
      }
      else{
        localStorage.setItem("produto", null);
      }
    });
  }
  

  createProd(produto){
    const id = this.ngFirestore.createId()
    const userRef: AngularFirestoreDocument<any> = this.ngFirestore.doc('Produtos/' + id);
    const userData: Produto = {
      titulo: produto.titulo,
      subtitulo: produto.subtitulo,
      descricao: produto.descricao,
      etiqueta: produto.etiqueta
    }


    return userRef.set(userData, { merge: true });
    


  }


}