import {Component} from '@angular/core';
import { Modelo } from '../../@core/data/amostra-mock';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-amostra-composicao',
  styleUrls: ['./amostra-composicao.component.scss'],
  templateUrl: './amostra-composicao.component.html',
})
export class AmostraComposicaoComponent {

  CompMatriz = ['Nada', 'TeO2', 'ZnO', 'PbO', 'GeO2' ];
  CompDopantes = ['Nada', 'ErO2', 'YbO2', 'NdO2', 'EuO2' ];
  CompNPs = ['Nada', 'AgNO3', 'AgO2', 'AuO2', 'Si100' ];  
  amostra = Modelo;

  dopante_checkbox: boolean = false; // controle do botão
  nps = false; // controle do botão
  constructor() { }
}
