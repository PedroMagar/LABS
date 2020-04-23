import {Component, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnDestroy() {
  }
}
