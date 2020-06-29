import {Component, OnInit } from '@angular/core';
import { Modelo } from '../../@core/data/amostra-mock';

@Component({
  selector: 'ngx-amostra-perfil',
  styleUrls: ['./amostra-perfil.component.scss'],
  templateUrl: './amostra-perfil.component.html',
})
export class AmostraPerfilComponent implements OnInit  {
  amostra = Modelo; // coleta a amostra a ser exibida

  esconder_configurar_matriz: boolean; // para controle quando não possui dados gravados
// ---------------------- bloco de composição
  esconder_matrizcomp_1: boolean; // esconde se for nada Matriz
  esconder_matrizcomp_2: boolean; // esconde se for nada
  esconder_matrizcomp_3: boolean; // esconde se for nada
  esconder_matrizcomp_4: boolean; // esconde se for nada
  esconder_dopantecomp_1: boolean; // esconde se for nada Dopantes
  esconder_dopantecomp_2: boolean; // esconde se for nada
  esconder_dopantecomp_3: boolean; // esconde se for nada
  esconder_dopantecomp_4: boolean; // esconde se for nada
  esconder_npcomp_1: boolean; // esconde se for nada NPs
  esconder_npcomp_2: boolean; // esconde se for nada
  esconder_npcomp_3: boolean; // esconde se for nada
  esconder_npcomp_4: boolean; // esconde se for nada
  padrao = 'Nada'; // comparação com os dados salvos
// ------------------------ bloco de processos
  fusao_temperatura_add: number; // variavel para carregar temperatura de fusão
  fusao_tempo_add: number; // variavel para carregar tempo de fusão
  tratamento_temperatura_add: number; // variavel para carregar temperatura de tratamento
  tratemento_tempo_add: number; // variavel para carregar tempo de tratamento
  fusao_forno: string;  // carregar o forno de fusão
  trat_forno: string; // carregar o dorno de tratamento
  observa: string; // carregar observações
  refundida: string;  // Define se foi ou não refundida
  esconder_refusao: boolean;  // Bandeira para mostrar refusão
// ------------------- inicialização
  constructor() {
// Define se tem dados cadastrados em composição
    if ((this.amostra.matrizcomp_1 === this.padrao) &&
    (this.amostra.matrizcomp_2 === this.padrao) &&
    (this.amostra.matrizcomp_3 === this.padrao) &&
    (this.amostra.matrizcomp_4 === this.padrao)
    ) {
      this.esconder_configurar_matriz = false;
    } else {
      this.esconder_configurar_matriz = true;
    }
// Define se o campo Matriz está preenchido, se não estiver, esconde
    if ( this.amostra.matrizcomp_1 === this.padrao ) { this.esconder_matrizcomp_1 = true;
    } else { this.esconder_matrizcomp_1 = false; }
    if ( this.amostra.matrizcomp_2 === this.padrao ) { this.esconder_matrizcomp_2 = true;
    } else { this.esconder_matrizcomp_2 = false; }
    if ( this.amostra.matrizcomp_3 === this.padrao ) { this.esconder_matrizcomp_3 = true;
    } else { this.esconder_matrizcomp_3 = false; }
    if ( this.amostra.matrizcomp_4 === this.padrao ) { this.esconder_matrizcomp_4 = true;
    } else { this.esconder_matrizcomp_4 = false; }
// Define  se o campo Dopantes está preenchido, se não estiver, esconde
    if ( this.amostra.dopantecomp_1 === this.padrao ) { this.esconder_dopantecomp_1 = true;
    } else { this.esconder_dopantecomp_1 = false; }
    if ( this.amostra.dopantecomp_2 === this.padrao ) { this.esconder_dopantecomp_2 = true;
    } else { this.esconder_dopantecomp_2 = false; }
    if ( this.amostra.dopantecomp_3 === this.padrao ) { this.esconder_dopantecomp_3 = true;
    } else { this.esconder_dopantecomp_3 = false; }
    if ( this.amostra.dopantecomp_4 === this.padrao ) { this.esconder_dopantecomp_4 = true;
    } else { this.esconder_dopantecomp_4 = false; }
// Define  se o campo NPs está preenchido, se não estiver, esconde
    if ( this.amostra.npcomp_1 === this.padrao ) { this.esconder_npcomp_1 = true;
    } else { this.esconder_npcomp_1 = false; }
    if ( this.amostra.npcomp_2 === this.padrao ) { this.esconder_npcomp_2 = true;
    } else {this.esconder_npcomp_2 = false; }
    if ( this.amostra.npcomp_3 === this.padrao ) { this.esconder_npcomp_3 = true;
    } else { this.esconder_npcomp_3 = false; }
    if ( this.amostra.npcomp_4 === this.padrao ) { this.esconder_npcomp_4 = true;
    } else { this.esconder_npcomp_4 = false; }
// ------------------------------- bloco de processo
    if (this.amostra.refusao_numero !== 0) {
      this.esconder_refusao = false;
      this.refundida = 'Sim';
      this.fusao_temperatura_add = this.amostra.refusao_fusao_temperatura;
      this.fusao_tempo_add = this.amostra.refusao_fusao_tempo;
      this.tratamento_temperatura_add = this.amostra.refusao_trat_temperatura;
      this.tratemento_tempo_add = this.amostra.refusao_trat_tempo;
      this.fusao_forno = this.amostra.refusao_forno_fusao;
      this.trat_forno = this.amostra.refusao_forno_trat;
      this.observa = this.amostra.refusao_obs;
    } else {
      this.esconder_refusao = true;
      this.refundida = 'Não';
      this.fusao_temperatura_add = this.amostra.fusao_temperatura;
      this.fusao_tempo_add = this.amostra.fusao_tempo;
      this.tratamento_temperatura_add = this.amostra.trat_temperatura;
      this.tratemento_tempo_add = this.amostra.trat_tempo;
      this.fusao_forno = this.amostra.fusao_forno;
      this.trat_forno = this.amostra.trat_forno;
      this.observa = this.amostra.processos_obs;
    }
  }
  ngOnInit() {}
}
