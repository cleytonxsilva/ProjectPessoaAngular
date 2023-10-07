import { Component, inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent {

  roteador = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa("",0);

  @Output() retorno = new EventEmitter<Pessoa>();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }


  salvar(){
    this.retorno.emit(this.pessoa);
  }
}
