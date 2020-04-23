import {Component, OnDestroy} from '@angular/core';

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
export class AmostraComposicaoComponent implements OnDestroy {
  constructor() { }

  ngOnDestroy() {
  }
}
