import {Component} from '@angular/core';
import {Modelo} from '../../@core/data/amostra-mock';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-amostra-processos',
  styleUrls: ['./amostra-processos.component.scss'],
  templateUrl: './amostra-processos.component.html',
})
export class AmostraProcessosComponent {

  CompMatriz = ['Nada', 'TeO2', 'ZnO', 'PbO', 'GeO2' ];
  CompDopantes = ['Nada', 'ErO2', 'YbO2', 'NdO2', 'EuO2' ];
  CompNPs = ['Nada', 'AgNO3', 'AgO2', 'AuO2', 'Si100' ];
  modelo = Modelo;

  dopante_checkbox: boolean = true; // controle do botão
  nps = false; // controle do botão
  constructor() { }
}
