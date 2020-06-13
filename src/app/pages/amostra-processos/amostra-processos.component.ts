import {Component, OnInit} from '@angular/core';
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
export class AmostraProcessosComponent  implements OnInit {

  lista_fornos = ['?', 'Forno 1', 'Forno 2', 'Forno 3', 'Forno 4', 'Forno 5', 'Forno 6', 'Forno 7', 'Forno 8'];
  lista_agitacao = ['Nenhuma', 'Automatica', 'Manual', 'Não sei informar'];
  amostra = Modelo;

  agitacao_checkbox: boolean;
  fornos_checkbox: boolean; // controle do botão
  nucleacao_checkbox: boolean; // controle do botão
  refusao_checkbox: boolean;
  obs_checkbox: boolean;
  nucle_tempo_total: number;

  constructor() { 
    if (this.amostra.fusao_forno === '?'){
      this.fornos_checkbox = false;
    } else {
      this.fornos_checkbox = true;
    }
    if (this.amostra.agita_tipo === 'Nenhuma'){
      this.agitacao_checkbox = false;
    } else {
      this.agitacao_checkbox = true;
    }
    if (this.amostra.nucle_ciclos === 0) {
      this.nucleacao_checkbox = false;
    } else {
      this.nucleacao_checkbox = true;
      this.nucle_tempo_total = (this.amostra.nucle_tempo/60)*this.amostra.nucle_ciclos;
    }
    if (this.amostra.refusao_numero === 0) {
      this.refusao_checkbox == false;
    } else {
      this.refusao_checkbox = true;
    }
    if (this.amostra.processos_obs === '') {
      this.obs_checkbox = false;
    } else {
      this.obs_checkbox = true;
    }
  }
  
  ngOnInit() {
  }
// Função de funcionamento do checkbox dos Agitação
  checkedAgita(): void {
    if (this.agitacao_checkbox === false) {
      this.agitacao_checkbox = true;
    } else {
      this.agitacao_checkbox = false;
    }
  }
// Função de funcionamento do checkbox dos Fornos
  checkedFornos(): void {
    if (this.fornos_checkbox === false) {
      this.fornos_checkbox = true;
    } else {
      this.fornos_checkbox = false;
    }
  }
// Função de funcionamento do checkbox dos Nucleação
  checkedNucleacao(): void {
    if (this.nucleacao_checkbox === false) {
      this.nucleacao_checkbox = true;
    } else {
      this.nucleacao_checkbox = false;
    }
  }
// Função de funcionamento do checkbox dos Refusão
  checkedRefusao(): void {
    if (this.refusao_checkbox === false) {
      this.refusao_checkbox = true;
    } else {
      this.refusao_checkbox = false;
    }
  }
// Função de funcionamento do checkbox dos OBS
  checkedOBS(): void {
    if (this.obs_checkbox === false) {
      this.obs_checkbox = true;
    } else {
      this.obs_checkbox = false;
    }
  }

}
