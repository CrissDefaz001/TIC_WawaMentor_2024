import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  url = "http://localhost:3000";

  constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  public traerCursos() {
    return this._httpClient.get(this.url + "/course") // Petición
  }
}
