import { Injectable } from "@angular/core";
import { Articulo } from '../models/articulo';

//Para hacer la peticion http
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from './global';

@Injectable() export class ArticuloService {


    constructor(private _httpClient: HttpClient) {

    }

    pruebas(): string {
        return "Servicio de articulos";
    }

    getArticulos(): Observable<any> {
        return this._httpClient.get(Global.url_api + "/articles");
    }
}