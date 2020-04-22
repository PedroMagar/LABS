import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class AmostraTableService extends SmartTableData {

  data = [{
    id: 1,
    Nome: 'TZ Eu Ag',
    Matiz: 'TZO',
    Dopante: 'Eu Ag',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 2,
    Nome: 'TZ Eu',
    Matiz: 'TZO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  }, {
    id: 3,
    Nome: 'TZN Eu',
    Matiz: 'TZNO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },{
    id: 4,
    Nome: 'TZ Eu Ag',
    Matiz: 'TZO',
    Dopante: 'Eu Ag',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },{
    id: 5,
    Nome: 'GP Eu',
    Matiz: 'GPO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },{
    id: 6,
    Nome: 'GP Eu Ag',
    Matiz: 'GPO',
    Dopante: 'Eu Ag',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },{
    id: 7,
    Nome: 'GP Eu Au',
    Matiz: 'GPO',
    Dopante: 'Eu Au',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },{
    id: 8,
    Nome: 'TZA Eu',
    Matiz: 'TZAO',
    Dopante: 'Eu',
    Autor: 'Augusto',
    Local: 'Gaveta',
  },

];

  getData() {
    return this.data;
  }
}
