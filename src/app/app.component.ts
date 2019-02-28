import { Component, OnInit } from '@angular/core';
import { FotosService } from './servicios/fotos.service';
import { IFoto } from './modelos/foto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  foterio: IFoto[] = [];
  constructor( public servicioFotos: FotosService){
  }

  ngOnInit(){
    this.servicioFotos.getFotos()
    .subscribe(
      fotos => {
        console.log(fotos);
        this.foterio = fotos;
      },
      error => console.log(error)
    )
  }
}
