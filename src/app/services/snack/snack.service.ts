import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snack } from 'src/app/models/snack.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private snacksUrl: string;

  constructor(private http: HttpClient) {
    this.snacksUrl = `${environment.apiUrl}/snacks`;
  }

  saveSnack(snack: Snack): Observable<Snack> {
    return this.http.post<Snack>(this.snacksUrl, snack);
  }

}
