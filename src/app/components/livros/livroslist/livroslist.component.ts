import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livros[] = [];

  modalService = inject(NgbModal);


  constructor() {

    this.lista.push(new Livros("Vectra", 2001, "Saraiva"));
    this.lista.push(new Livros("Gol", 2007, "Saraiva"));
    this.lista.push(new Livros("Corsa", 2004, "Saraiva"));
    this.lista.push(new Livros("Uno", 1994, "Saraiva"));
    this.lista.push(new Livros("Clio", 2006, "Saraiva"));
  }

  abrirModal(content: any){
    this.modalService.open(content, {size: 'lg'});
  }

  addNaLista(livros: Livros){
    this.lista.push(livros);
    this.modalService.dismissAll();
  }

  excluir(index: number){
    this.lista.splice(index, 1);
    this.modalService.dismissAll();
  }
}
