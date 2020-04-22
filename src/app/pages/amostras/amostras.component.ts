import {Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AmostrasTableData } from '../../@core/data/amostras-table';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-modelo',
  styleUrls: ['./amostras.component.scss'],
  templateUrl: './amostras.component.html',
})
export class AmostrasComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Nome: {
        title: 'Nome',
        type: 'string',
      },
      Matriz: {
        title: 'Matriz',
        type: 'string',
      },
      Dopante: {
        title: 'Dopante',
        type: 'string',
      },
      Autor: {
        title: 'Autor',
        type: 'string',
      },
      Local: {
        title: 'Local',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AmostrasTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Tem certeza que deseja apagar a amostra?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
