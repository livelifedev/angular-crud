import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CreaturesService {
  private model = 'creatures';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}
