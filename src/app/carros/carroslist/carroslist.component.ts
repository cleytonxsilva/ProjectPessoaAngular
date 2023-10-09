import { Component, inject } from '@angular/core';
import { Carros } from '../carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  
  lista: Carros[] = [];

  modalService = inject(NgbModal);


  constructor() {

    this.lista.push(new Carros("Vectra", 2001));
    this.lista.push(new Carros("Gol", 2007));
    this.lista.push(new Carros("Corsa", 2004));
    this.lista.push(new Carros("Uno", 1994));
    this.lista.push(new Carros("Clio", 2006));
  }

  abrirModal(content: any){
    this.modalService.open(content, {size: 'lg'});
  }

  addNaLista(pessoa: Carros){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }
  excluir(index: number){
    this.lista.splice(index, 1);
    this.modalService.dismissAll();
  }

}
