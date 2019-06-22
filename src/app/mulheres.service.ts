import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MulheresService {

  constructor(
    private http: HttpClient
  ) {
  }

  public all() {
    return this.http.get('http://67.205.152.75:8080/api/important-womans');
  }

  public getWoman(id) {
    return this.http.get('http://67.205.152.75:8080/api/important-woman/' + id);
  }
}
