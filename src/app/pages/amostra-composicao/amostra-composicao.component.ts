import {Component, OnInit} from '@angular/core';
import { Modelo } from '../../@core/data/amostra-mock';

@Component({
  selector: 'ngx-amostra-composicao',
  styleUrls: ['./amostra-composicao.component.scss'],
  templateUrl: './amostra-composicao.component.html',
})
export class AmostraComposicaoComponent implements OnInit  {

  CompMatriz = ['Nada', 'TeO2', 'ZnO', 'PbO', 'GeO2' ];
  CompDopantes = ['Nada', 'ErO2', 'YbO2', 'NdO2', 'EuO2', 'TbO2' ];
  CompNPs = ['Nada', 'AgNO3', 'AgO2', 'AuO2', 'Si100' ];
  numeroMatrizes: number; // contador de numero de elementos de matriz
  numeroDopantes: number; // contador de numero de elementos Dopantes
  numeroNPs: number; // contador de numero de elementos de NPs
  esconder_matriz_2: boolean;
  esconder_matriz_3: boolean;
  esconder_matriz_4: boolean;

  esconder_dopante_2: boolean;
  esconder_dopante_3: boolean;
  esconder_dopante_4: boolean;

  esconder_nps_2: boolean;
  esconder_nps_3: boolean;
  esconder_nps_4: boolean;

  amostra = Modelo; // carrrega os dados da amostra de Modelo Mock
  dopante_checkbox: boolean = false; // controle do botão
  nps_checkbox: boolean = false; // controle do botão
  constructor() {
    
    if (this.amostra.matrizcomp_4 !== 'Nada') {
      this.numeroMatrizes = 4;
    } else if (this.amostra.matrizcomp_3 !== 'Nada') {
      this.numeroMatrizes = 3;
    } else if (this.amostra.matrizcomp_2 !== 'Nada') {
      this.numeroMatrizes = 2;
    } else {
      this.numeroMatrizes = 1;
    }
    this.mostrarMatriz();
    
    if (this.amostra.dopantecomp_4 !== 'Nada') {
      this.numeroDopantes = 4;
    } else if (this.amostra.dopantecomp_3 !== 'Nada') {
      this.numeroDopantes = 3;
    } else if (this.amostra.dopantecomp_2 !== 'Nada') {
      this.numeroDopantes = 2;
    } else {
      this.numeroDopantes = 1;
    }
    this.mostrarDopantes();

    if (this.amostra.npcomp_4 !== 'Nada') {
      this.numeroNPs = 4;
    } else if (this.amostra.npcomp_3 !== 'Nada') {
      this.numeroNPs = 3;
    } else if (this.amostra.npcomp_2 !== 'Nada') {
      this.numeroNPs = 2;
    } else {
      this.numeroNPs = 1;
    }
    this.mostrarNPs();
  }

  ngOnInit() {
  }

  checkedDopante(): void {
    if (this.dopante_checkbox === false) {
      this.dopante_checkbox = true;
    } else {
      this.dopante_checkbox = false;
    }
  }

  checkedNPs(): void{
    if (this.nps_checkbox === false) {
      this.nps_checkbox = true;
    } else {
      this.nps_checkbox = false;
    }
  }

  onAdicionarMatriz(): void {
    if (this.numeroMatrizes < 4){
      this.numeroMatrizes = this.numeroMatrizes + 1;
      this.mostrarMatriz();
    }
  }
  onRemoverMatriz(): void {
    if (this.numeroMatrizes > 1){
      this.numeroMatrizes = this.numeroMatrizes - 1;
      this.mostrarMatriz();
    }
  }

  onAdicionarDopante(): void {
    if (this.numeroDopantes < 4){
      this.numeroDopantes = this.numeroDopantes + 1;
      this.mostrarDopantes();
    }
  }

  onRemoverDopante(): void {
    if (this.numeroDopantes > 1){
      this.numeroDopantes = this.numeroDopantes - 1;
      this.mostrarDopantes();
    }
  }

  onAdicionarNPs(): void {
    if (this.numeroNPs < 4){
      this.numeroNPs = this.numeroNPs + 1;
      this.mostrarNPs();
    }
  }

  onRemoverNPs(): void {
    if (this.numeroNPs > 1){
      this.numeroNPs = this.numeroNPs - 1;
      this.mostrarNPs();
    }
  }

  mostrarMatriz(): void {
    switch (this.numeroMatrizes){
      case 1:
        this.esconder_matriz_2 = true;
        this.esconder_matriz_3 = true;
        this.esconder_matriz_4 = true;
        break;
      case 2:
        this.esconder_matriz_2 = false;
        this.esconder_matriz_3 = true;
        this.esconder_matriz_4 = true;
        break;
      case 3:
        this.esconder_matriz_2 = false;
        this.esconder_matriz_3 = false;
        this.esconder_matriz_4 = true;
        break;
      case 4:
        this.esconder_matriz_2 = false;
        this.esconder_matriz_3 = false;
        this.esconder_matriz_4 = false;
        break;
    }
  }

  mostrarDopantes(): void {
    switch (this.numeroDopantes){
      case 1:
        this.esconder_dopante_2 = true;
        this.esconder_dopante_3 = true;
        this.esconder_dopante_4 = true;
        break;
      case 2:
        this.esconder_dopante_2 = false;
        this.esconder_dopante_3 = true;
        this.esconder_dopante_4 = true;
        break;
      case 3:
        this.esconder_dopante_2 = false;
        this.esconder_dopante_3 = false;
        this.esconder_dopante_4 = true;
        break;
      case 4:
        this.esconder_dopante_2 = false;
        this.esconder_dopante_3 = false;
        this.esconder_dopante_4 = false;
        break;
    }
  }
  
  mostrarNPs(): void {
    switch (this.numeroNPs){
      case 1:
        this.esconder_nps_2 = true;
        this.esconder_nps_3 = true;
        this.esconder_nps_4 = true;
        break;
      case 2:
        this.esconder_nps_2 = false;
        this.esconder_nps_3 = true;
        this.esconder_nps_4 = true;
        break;
      case 3:
        this.esconder_nps_2 = false;
        this.esconder_nps_3 = false;
        this.esconder_nps_4 = true;
        break;
      case 4:
        this.esconder_nps_2 = false;
        this.esconder_nps_3 = false;
        this.esconder_nps_4 = false;
        break;
    }
  }
}
