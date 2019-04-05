import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFoto } from '../modelos/foto';

@Injectable({           //<---- el decorador Injectable me dice donde inyecta import del servicio
                        //en este caso lo está inyectando en root, o sea en app.module. Por eso no 
                        //hace falta importarlo y declararlo en app.module.
  providedIn: 'root'
})
export class FotosService {
  /* https://jsonplaceholder.typecode.com proporciona datos ficticios para desarrollar aplicaciones.
    Hay datos de tipo posts, comments, albums, photos, todos, users
  */
  constructor(private http: HttpClient) { }
    
  getFotos() {
      return this.http.get<IFoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=2');
  }
}
