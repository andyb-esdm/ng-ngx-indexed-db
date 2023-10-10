import { Injectable } from '@angular/core';
import { NgxIndexedDBService, ObjectStoreMeta } from 'ngx-indexed-db';
import { ITemporaryLayer } from './temporary-layer.model';
import { Observable, switchMap, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TemporaryLayerService {

  private readonly storeName = 'temporaryLayer';
  constructor(private dbservice: NgxIndexedDBService) { }

  saveTemporaryLayerToIndexedDB(temporaryLayer: ITemporaryLayer) {
    this.dbservice.clear(this.storeName).pipe(
      switchMap(response => {
        console.log(response);
        return this.dbservice.add(this.storeName, temporaryLayer)
      })
    ).subscribe(response => console.log(response))
  }

  readTemporaryLayerFromIndexedDB(): Observable<ITemporaryLayer> {
    return this.dbservice.getByID(this.storeName, 1);
  }
}
