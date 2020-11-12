import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from './interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(public ngStore: AngularFirestore) { }

  getUsuarioList() {
    const usuarioRef = this.ngStore.collection("Usuario");
    return usuarioRef;
  }


  setUsuario(usuario){
    const usuarioData: Usuario = {
      nome: usuario.nome,
      usuario: usuario.usuario,
      datanasc: usuario.datanasc,
      telefone: usuario.telefone,
      cpf: usuario.cpf,
      cep: usuario.cep,
      email: usuario.email
    }
    return this.ngStore.collection("Usuario").add(usuarioData);
  }


  updateUsuario(uid, usuario){
    const usuarioData: Usuario = {
      nome: usuario.nome,
      usuario: usuario.usuario,
      datanasc: usuario.datanasc,
      telefone: usuario.telefone,
      cpf: usuario.cpf,
      cep: usuario.cep,
      email: usuario.email
    }
    const usuarioRef: AngularFirestoreDocument<any> = this.ngStore.doc("Usuario/"+uid);
    return usuarioRef.update(usuarioData);
  }


  removeUsuario(uid){
    const usuarioRef: AngularFirestoreDocument<any> = this.ngStore.doc("Usuario/"+uid);
    return usuarioRef.delete();
  }
}

