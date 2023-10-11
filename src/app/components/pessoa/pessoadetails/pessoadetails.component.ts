import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoasService } from 'src/app/services/pessoas.service';

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent {

  
  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  pessoaService = inject(PessoasService);
  isEdit = false; 

  constructor(){
    
  }
  ngOnInit() {
    this.isEdit = this.pessoa.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.pessoaService.update(this.pessoa).subscribe({
        next: pessoa => {
          this.retorno.emit(pessoa);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.pessoaService.save(this.pessoa).subscribe({
        next: pessoa => {
          this.retorno.emit(pessoa);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
}
