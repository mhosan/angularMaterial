import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/servicios/fotos.service';
import { IFoto } from 'src/app/modelos/foto';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  public foterio: IFoto[] = [];
  constructor(public servicio: FotosService) { }

  ngOnInit(){
    this.servicio.getFotos()
    .subscribe(
      fotos => {
        console.log(fotos);
        this.foterio = fotos;     //llenar el arreglo "foterio" con los datos devueltos por el serv.
      },
      error => console.log(error)
    )
  }
}
