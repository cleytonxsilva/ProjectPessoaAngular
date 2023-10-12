import { Component, inject } from '@angular/core';
import { Livros } from 'src/app/models/livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivrosService } from 'src/app/services/livros.service';
@Component({
  selector: 'app-livros',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];

  livroSelecionadaParaEdicao: Livros = new Livros();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livrosService = inject(LivrosService)

  constructor() {

    this.listAll();
  }

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  listAll() {

    this.livrosService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  exemploErro() {

    this.livrosService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  adicionar(modal: any) {
    this.livroSelecionadaParaEdicao = new Livros();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, livro: Livros, indice: number) {
    this.livroSelecionadaParaEdicao = Object.assign({}, livro);
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarLivros(livros: Livros) {

    this.listAll();
    this.modalService.dismissAll();

  }
  delete(id: number) {
    if (confirm('Deseja realmente excluir este livro?')) {
      this.livrosService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(livro => livro.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o livro. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }
}
