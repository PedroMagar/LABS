import {Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
// import { AmostrasTableData } from '../../@core/data/amostras-table';
import { AmostrasService } from '../../@core/services/amostra-service';
import { Amostra } from '../../@core/data/amostra';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ngx-amostras',
  styleUrls: ['./amostras.component.scss'],
  templateUrl: './amostras.component.html',
})
export class AmostrasComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
      nome: {
        title: 'Nome',
        type: 'string',
      },
      matriz: {
        title: 'Matriz',
        type: 'string',
      },
      dopante: {
        title: 'Dopante',
        type: 'string',
      },
      autor: {
        title: 'Autor',
        type: 'string',
      },
      local: {
        title: 'Local',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  amostras: Amostra[] = [];
  selectedAmostra: Amostra;

  constructor(private amostraService: AmostrasService) {
    this.loadTableAmostras();
  }

  onCreateConfirm(event) {
    event.newData.id = 0;

    if (event.newData.nome === '' || event.newData.matriz === '' || event.newData.dopante === '') {
      // console.log("Informações obrigatórias se encontram vazias");
      // console.log(event.newData.nome == "");
      // console.log(event.newData.matriz == "");
      // console.log(event.newData.dopante == "");
    } else {
      this.selectedAmostra = event.newData;
      this.amostraService.addAmostra(this.selectedAmostra)
        .subscribe(
          res => {
            event.newData = res;
            event.confirm.resolve(event.newData);
          },
          err => { },
        );
    }
  }

  onSaveConfirm(event) {
    this.selectedAmostra = event.newData;
    this.amostraService.updateAmostra(this.selectedAmostra)
      .subscribe(
        res => {
          event.confirm.resolve(event.newData);
        },
        err => { },
      );
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Tem certeza que deseja apagar a amostra?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  loadTableAmostras() {
    this.amostraService.getAmostras()
      .pipe(finalize(() => this.source.load(this.amostras)))
      .subscribe(
      res => {
        // console.log("Resposta JSON:");
        // console.log(res);
        this.amostras = res;
      },
      err => { },
    );
  }


}
