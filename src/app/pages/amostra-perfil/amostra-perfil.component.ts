import {Component, OnDestroy} from '@angular/core';

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
  constructor() { }

  ngOnDestroy() {
  }
}
