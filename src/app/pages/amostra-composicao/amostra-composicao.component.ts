import {Component} from '@angular/core';
import {AmostraComposicao} from '../../@core/data/amostra-composicao';

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

  CompMatriz = ['Nada', 'TeO2', 'ZnO', 'PbO', 'GeO2'];  
  CompDopantes = ['Nada', 'ErO2', 'YbO2', 'NdO2','EuO2'];
  CompNPs = ['Nada', 'AgNO3', 'AgO2', 'AuO2', 'Si100'];
  modelo = new AmostraComposicao (
    1,
    'Vidro Teste',
    '',
    '',
    this.CompMatriz[0], 0,
    this.CompMatriz[0], 0,
    this.CompMatriz[0], 0,
    this.CompMatriz[0], 0,
    this.CompDopantes[0], 0,
    this.CompDopantes[0], 0,
    this.CompDopantes[0], 0,
    this.CompDopantes[0], 0,
    this.CompNPs[0], 0,
    this.CompNPs[0], 0,
    this.CompNPs[0], 0,
    this.CompNPs[0], 0,
    );
  dopante = false;  // controle do botão 
  nps = false;    // controle do botão
  constructor() { }
}
