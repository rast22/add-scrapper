import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

    apiBaseUrl: string;
    constructor(private http: HttpClient) {
      this.apiBaseUrl = "http://localhost:5450";
    }

    getAdds() {
      return this.http.get<add[]>(this.apiBaseUrl + `/api/getAdds`);
    }
}

export type add = {
  title: string;
  image: string;
}
