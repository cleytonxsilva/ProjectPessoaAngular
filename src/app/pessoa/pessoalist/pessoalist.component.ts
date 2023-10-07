import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {

  lista: Pessoa[] = [];

  modalService = inject(NgbModal);

  constructor() {

    this.lista.push(new Pessoa("Cleyton", 36));
    this.lista.push(new Pessoa("André", 31));
    this.lista.push(new Pessoa("Andrei", 39));
    this.lista.push(new Pessoa("Fred", 31));
    this.lista.push(new Pessoa("Luis", 31));
  }

  abrirModal(content: any){
    this.modalService.open(content, {size: 'lg'});
  }

  addNaLista(pessoa: Pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }
}
