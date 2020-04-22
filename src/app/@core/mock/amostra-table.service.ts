import { Injectable } from '@angular/core';
import { AmostrasTableData } from '../data/amostras-table';

@Injectable()
export class AmostraTableService extends AmostrasTableData {

  data = [{
    id: 1,
    Nome: 'TZ Eu Ag',
    Matriz: 'TZO',
    Dopante: 'Eu Ag',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 2,
    Nome: 'TZ Eu',
    Matriz: 'TZO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 3,
    Nome: 'TZN Eu',
    Matriz: 'TZNO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 4,
    Nome: 'TZ Eu Ag',
    Matriz: 'TZO',
    Dopante: 'Eu Ag',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 5,
    Nome: 'GP Eu',
    Matriz: 'GPO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 6,
    Nome: 'GP Eu Ag',
    Matriz: 'GPO',
    Dopante: 'Eu Ag',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 7,
    Nome: 'GP Eu Au',
    Matriz: 'GPO',
    Dopante: 'Eu Au',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 8,
    Nome: 'TZA Eu',
    Matriz: 'TZAO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },

];

  getData() {
    return this.data;
  }
}
