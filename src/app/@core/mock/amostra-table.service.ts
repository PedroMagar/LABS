import { Injectable } from '@angular/core';
import { AmostrasTableData } from '../data/amostras-table';

@Injectable()
export class AmostraTableService extends AmostrasTableData {

  data = [{
    id: 1,
    nome: 'TZ Eu Ag',
    matriz: 'TZO',
    dopante: 'Eu Ag',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 2,
    nome: 'TZ Eu',
    matriz: 'TZO',
    dopante: 'Eu',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 3,
    nome: 'TZN Eu',
    matriz: 'TZNO',
    dopante: 'Eu',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 4,
    nome: 'TZ Eu Ag',
    matriz: 'TZO',
    dopante: 'Eu Ag',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 5,
    nome: 'GP Eu',
    matriz: 'GPO',
    dopante: 'Eu',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 6,
    nome: 'GP Eu Ag',
    matriz: 'GPO',
    dopante: 'Eu Ag',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 7,
    nome: 'GP Eu Au',
    matriz: 'GPO',
    dopante: 'Eu Au',
    autor: 'Augusto',
    local: 'Gaveta',
  }, {
    id: 8,
    nome: 'TZA Eu',
    matriz: 'TZAO',
    dopante: 'Eu',
    autor: 'Augusto',
    local: 'Gaveta',
  },

];

  getData() {
    return this.data;
  }
}
