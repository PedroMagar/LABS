import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-modelo',
  styleUrls: ['./modelo.component.scss'],
  templateUrl: './modelo.component.html',
})
export class ModeloComponent implements OnDestroy {

  constructor() { }

  ngOnDestroy() {
  }
}
