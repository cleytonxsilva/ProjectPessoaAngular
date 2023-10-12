import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livros } from 'src/app/models/livros';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  
  @Input() livros: Livros = new Livros();
  @Output() retorno = new EventEmitter<Livros>();

  livrosService = inject(LivrosService);
  isEdit = false; 

  constructor(){
    
  }
  ngOnInit() {
    this.isEdit = this.livros.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.livrosService.update(this.livros).subscribe({
        next: livros => {
          this.retorno.emit(livros);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.livrosService.save(this.livros).subscribe({
        next: livros => {
          this.retorno.emit(livros);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
}
