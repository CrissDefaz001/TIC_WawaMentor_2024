import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = "http://localhost:3000";

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public traerCursos(): Observable<any> {
    return this._httpClient.get<any>(this.url + "/course") // Petición
  }

}
