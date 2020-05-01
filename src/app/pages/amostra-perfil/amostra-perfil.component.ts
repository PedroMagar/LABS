import {Component, OnDestroy} from '@angular/core';
import { Modelo } from '../../@core/data/amostra-mock';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-amostra-perfil',
  styleUrls: ['./amostra-perfil.component.scss'],
  templateUrl: './amostra-perfil.component.html',
})
export class AmostraPerfilComponent implements OnDestroy {
  constructor(
  ) {}

  amostra = Modelo;// coleta a amostra a ser exibida

  ngOnDestroy() {
  }
}
