import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { CrudprodService } from '../services/crudprod.service';
import { Produto } from '../services/interfaces/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.page.html',
  styleUrls: ['./anunciar.page.scss'],
})
export class AnunciarPage {
  public show:boolean = true;
  

  constructor(public photoService: PhotoService, public authService: CrudprodService,public router: Router) {
   
   }

  ngOnInit() {
  }

  addProd(titulo, subtitulo, descricao, etiqueta){
    const userData: Produto = {
      titulo: titulo.value,
      subtitulo: subtitulo.value,
      descricao: descricao.value,
      etiqueta: etiqueta.value
    }
    this.authService.createProd(userData);
    this.router.navigate(['/inicio']);
  }
  

  addPhotoToGallery() {
  this.photoService.addNewToGallery();

  this.show = false;
}

}




