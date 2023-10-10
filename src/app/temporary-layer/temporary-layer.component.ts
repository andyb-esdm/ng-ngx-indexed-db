import { Component } from '@angular/core';
import { TemporaryLayerService } from '../map/temporary-layer.service';
import { ITemporaryLayer } from '../map/temporary-layer.model';

@Component({
  selector: 'app-temporary-layer',
  templateUrl: './temporary-layer.component.html',
  styleUrls: ['./temporary-layer.component.css']
})
export class TemporaryLayerComponent {
  constructor(private temporaryLayerService: TemporaryLayerService) { }
  onAddTemporaryLayer(): void {
    const temporaryLayer: ITemporaryLayer = {
      id: 1,
      name: 'name',
      nameAttribute: 'nameAttribute',
      attributes: ['name', 'area', 'habitatType'],
      geoJSON: {
        type: 'complicated type',
        features: ['feature1', 'feature2', 'feature3']
      }
    }
    this.temporaryLayerService.saveTemporaryLayerToIndexedDB(temporaryLayer);
  }

  onReadTemporaryLayer(): void {
    this.temporaryLayerService.readTemporaryLayerFromIndexedDB().subscribe(response => console.log(response))
  }
}
