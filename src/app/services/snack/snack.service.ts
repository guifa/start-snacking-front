import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snack } from 'src/app/models/snack.model';
import { Observable } from 'rxjs';

const snacksUrl = '/proxy/snacks';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private http: HttpClient) { }

  saveSnack(snack: Snack): Observable<Snack> {
    return this.http.post<Snack>(snacksUrl, snack);
  }

}
