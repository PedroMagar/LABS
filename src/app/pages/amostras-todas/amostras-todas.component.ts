import {Component, OnInit} from '@angular/core';
import { Amostras_Todas } from '../../@core/data/amostras-tabela';
import { AmostraClasse } from '../../@core/data/amostra-classe';

@Component({
  selector: 'ngx-amostras-todas',
  styleUrls: ['./amostras-todas.component.scss'],
  templateUrl: './amostras-todas.component.html',
})
export class AmostrasTodasComponent implements OnInit {

  amostras = Amostras_Todas;

  constructor() {
   }

  ngOnInit() {
  }
  
  selectedAmostra: AmostraClasse;
  
  onSelect(amostra: AmostraClasse): void {
    this.selectedAmostra = amostra;
  }

}
