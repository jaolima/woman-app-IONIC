import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private http: HttpClient
  ) { }

  public all() {
    return this.http.get('http://67.205.152.75:5000/api/events');
  }
}
