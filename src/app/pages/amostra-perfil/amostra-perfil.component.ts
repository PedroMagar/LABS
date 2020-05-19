import {Component, OnInit } from '@angular/core';
import { Modelo } from '../../@core/data/amostra-mock';

@Component({
  selector: 'ngx-amostra-perfil',
  styleUrls: ['./amostra-perfil.component.scss'],
  templateUrl: './amostra-perfil.component.html',
})
export class AmostraPerfilComponent implements OnInit  {
  amostra = Modelo; // coleta a amostra a ser exibida

  esconder_configurar_matriz: boolean;

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
  padrao = "Nada"; // comparação com os dados salvos

  constructor() {
// Define se tem dados cadastrados
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
    if ( this.amostra.matrizcomp_1 === this.padrao){this.esconder_matrizcomp_1 = true;
    } else { this.esconder_matrizcomp_1 = false; }
    if ( this.amostra.matrizcomp_2 === this.padrao){this.esconder_matrizcomp_2 = true;
    } else { this.esconder_matrizcomp_2 = false; }
    if ( this.amostra.matrizcomp_3 === this.padrao){this.esconder_matrizcomp_3 = true;
    } else { this.esconder_matrizcomp_3 = false; }
    if ( this.amostra.matrizcomp_4 === this.padrao){this.esconder_matrizcomp_4 = true;
    } else { this.esconder_matrizcomp_4 = false; }
// Define  se o campo Dopantes está preenchido, se não estiver, esconde
    if ( this.amostra.dopantecomp_1 === this.padrao){this.esconder_dopantecomp_1 = true;}
    else{this.esconder_dopantecomp_1 = false;}
    if (this.amostra.dopantecomp_2 === this.padrao){this.esconder_dopantecomp_2 = true;}
    else{this.esconder_dopantecomp_2 = false;}
    if (this.amostra.dopantecomp_3 === this.padrao){this.esconder_dopantecomp_3 = true;}
    else{this.esconder_dopantecomp_3 = false;}
    if (this.amostra.dopantecomp_4 === this.padrao){this.esconder_dopantecomp_4 = true;}
    else{this.esconder_dopantecomp_4 = false;}
// Define  se o campo NPs está preenchido, se não estiver, esconde
    if (this.amostra.npcomp_1 === this.padrao){this.esconder_npcomp_1 = true;}
    else{this.esconder_npcomp_1 = false;}
    if (this.amostra.npcomp_2 === this.padrao){this.esconder_npcomp_2 = true;}
    else{this.esconder_npcomp_2 = false;}
    if (this.amostra.npcomp_3 === this.padrao){this.esconder_npcomp_3 = true;}
    else{this.esconder_npcomp_3 = false;}
    if (this.amostra.npcomp_4 === this.padrao){this.esconder_npcomp_4 = true;}
    else{this.esconder_npcomp_4 = false;}
  }
  ngOnInit() {}
}
