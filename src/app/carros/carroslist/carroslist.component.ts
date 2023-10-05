import { Component } from '@angular/core';
import { Carros } from '../carros';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  lista: Carros[] = [];

  constructor(){
    let carro1: Carros = new Carros();
    carro1.modelo = "Vectra";
    carro1.ano = 2001;

    let carro2: Carros = new Carros();
    carro2.modelo = "Corsa";
    carro2.ano = 1997;

    let carro3: Carros = new Carros();
    carro3.modelo = "Gol";
    carro3.ano = 1998;

    let carro4: Carros = new Carros();
    carro4.modelo = "Civic";
    carro4.ano = 2019;

    let carro5: Carros = new Carros();
    carro5.modelo = "Clio";
    carro5.ano = 2007;

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);
    this.lista.push(carro5);
  }

}
