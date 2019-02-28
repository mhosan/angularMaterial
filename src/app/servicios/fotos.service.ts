import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFoto } from '../modelos/foto';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http: HttpClient) { }
    getFotos() {
      return this.http.get<IFoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
    }
}
