import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';
@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {
  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = "Cleyton";
    pessoa1.idade = 100;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = "Andre";
    pessoa2.idade = 99;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = "Andrei";
    pessoa3.idade = 98;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = "Fred";
    pessoa4.idade = 97;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = "Luis";
    pessoa5.idade = 96;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = "CleytonCópia";
    pessoa6.idade = 5;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = "AndreCópia";
    pessoa7.idade = 4;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = "AndreiCópia";
    pessoa8.idade = 3;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = "FredCópia";
    pessoa9.idade = 2;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = "LuisCópia";
    pessoa10.idade = 1;


    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }
}