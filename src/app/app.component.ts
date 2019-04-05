import { Component, OnInit } from '@angular/core';
import { FotosService } from './servicios/fotos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public elAlbumId: number[] = [1, 2, 3, 4];
  constructor( public servicioFotos: FotosService){
  }

  
  cartelDelBoton(){
    alert('¿y que esperabas?');
  }
}
