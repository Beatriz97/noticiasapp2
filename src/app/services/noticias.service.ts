import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({

      'X-Api-Key' : apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  private ejecutarConsulta<T>( query: string ){

    query = apiUrl + query;

    return this.http.get<T>( query, { headers } );
  }

  getTopHeadline (){
    return this.ejecutarConsulta<RespuestaTopHeadlines>('/top-headlines?country=mx');

    //return this.http.get<RespuestaTopHeadlines> ('http://newsapi.org/v2/top-headlines?country=mx&apiKey=c6d4d7a015d44d20a94846e431da87bd');
  }

  getTopHeadlineCategoria (categoria: string ){
    return this.ejecutarConsulta<RespuestaTopHeadlines>(`/top-headlines?country=mx&category=${ categoria }`);
  }
}
