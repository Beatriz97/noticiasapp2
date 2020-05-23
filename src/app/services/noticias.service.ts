import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadline (){
    return this.http.get<RespuestaTopHeadlines> ('http://newsapi.org/v2/top-headlines?country=mx&apiKey=afe94d0fb14c4da2b3aa3db4c50cfdab');
  }
}
