import {Component} from '@angular/core';
import {ServicioDeAutentService} from './servicio-de-autent.service';
import {FireDBService} from './fire-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-compra';

  constructor( public authComponent: ServicioDeAutentService ,
               public dbApp: FireDBService) {
  }
}
