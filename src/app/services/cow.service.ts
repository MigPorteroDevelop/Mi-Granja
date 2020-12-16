import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Creo el servicio que hace la petición get al servidor.
@Injectable()
export class CowService {

    public url: string

    constructor(
        private _http: HttpClient
    ) {
        this.url = './assets/data.json';
    }

    //Método que se utilizará para consumir este servicio.
    getCows(): Observable<any> {
        return this._http.get(this.url)
    }

}