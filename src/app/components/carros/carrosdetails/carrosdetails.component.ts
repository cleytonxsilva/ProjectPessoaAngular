import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carros } from 'src/app/models/carros';
import { CarrosService } from 'src/app/services/carros.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  
  @Input() carros: Carros = new Carros();
  @Output() retorno = new EventEmitter<Carros>();

  carrosService = inject(CarrosService);
  isEdit = false; 

  constructor(){
    
  }
  ngOnInit() {
    this.isEdit = this.carros.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.carrosService.update(this.carros).subscribe({
        next: carros => {
          this.retorno.emit(carros);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.carrosService.save(this.carros).subscribe({
        next: carros => {
          this.retorno.emit(carros);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
}
