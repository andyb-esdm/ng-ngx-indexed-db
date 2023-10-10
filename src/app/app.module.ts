import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { TemporaryLayerComponent } from './temporary-layer/temporary-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemporaryLayerComponent
  ],
  imports: [
    BrowserModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
