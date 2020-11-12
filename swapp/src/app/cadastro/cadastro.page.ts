import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../services/interfaces/usuario';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  addUser(nome, usuario, datanasc, telefone, cpf, cep, email, senha){
    const userData: Usuario = {
      nome: nome.value,
      usuario: usuario.value,
      datanasc: datanasc.value,
      telefone: telefone.value,
      cpf: cpf.value,
      cep: cep.value,
      email: email.value
    }

    this.authService.RegisterUser(email.value, senha.value, userData);

   
  }

}
