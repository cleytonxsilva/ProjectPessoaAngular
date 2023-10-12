import { Component, inject } from '@angular/core';
import { Carros } from 'src/app/models/carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrosService } from 'src/app/services/carros.service';
@Component({
  selector: 'app-carros',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carros[] = [];

  carroSelecionadaParaEdicao: Carros = new Carros();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  carrosService = inject(CarrosService)

  constructor() {

    this.listAll();
  }

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  listAll() {

    this.carrosService.listAll().subscribe({
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

    this.carrosService.exemploErro().subscribe({
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
    this.carroSelecionadaParaEdicao = new Carros();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, carro: Carros, indice: number) {
    this.carroSelecionadaParaEdicao = Object.assign({}, carro);
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarCarros(carros: Carros) {

    this.listAll();
    this.modalService.dismissAll();

  }
  delete(id: number) {
    if (confirm('Deseja realmente excluir este livro?')) {
      this.carrosService.delete(id).subscribe({
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
