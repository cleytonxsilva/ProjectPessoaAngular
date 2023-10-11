import { Component, inject } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoasService } from 'src/app/services/pessoas.service';
@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {

  lista: Pessoa[] = [];

  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  pessoaService = inject(PessoasService)

  constructor() {

    this.listAll();
  }

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  listAll() {

    this.pessoaService.listAll().subscribe({
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

    this.pessoaService.exemploErro().subscribe({
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
    this.pessoaSelecionadaParaEdicao = new Pessoa();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, pessoa: Pessoa, indice: number) {
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa);
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarPessoa(pessoa: Pessoa) {

    this.listAll();
    this.modalService.dismissAll();

  }
  delete(id: number) {
    if (confirm('Deseja realmente excluir esta pessoa?')) {
      this.pessoaService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(pessoa => pessoa.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir a pessoa. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }
}
