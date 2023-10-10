import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'cmsi-db',
  version: 1,
  objectStoresMeta: [{
    store: 'temporaryLayer',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: []
  }]
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ]
})
export class MapModule { }
