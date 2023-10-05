import { Component } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livros[] = [];

  constructor(){
    let livro1: Livros = new Livros();
    livro1.titulo = "O Animal";
    livro1.ano = 2001;
    livro1.editora = "Saraiva"

    let livro2: Livros = new Livros();
    livro2.titulo = "O Carro";
    livro2.ano = 1997;
    livro2.editora = "Moderna"


    let livro3: Livros = new Livros();
    livro3.titulo = "A Mesa";
    livro3.ano = 1998;
    livro3.editora = "Pearson"


    let livro4: Livros = new Livros();
    livro4.titulo = "A Cadeira";
    livro4.ano = 2019;
    livro4.editora = "Saraiva"


    let livro5: Livros = new Livros();
    livro5.titulo = "O Ser Humano";
    livro5.ano = 2007;
    livro5.editora = "Epoca"


    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);
    this.lista.push(livro5);
  }
}
