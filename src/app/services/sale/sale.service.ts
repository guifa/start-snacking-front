import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Sale } from 'src/app/models/sale.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private salesUrl: string;

  constructor(private http: HttpClient) {
    this.salesUrl = `${environment.apiUrl}/sales`;
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.salesUrl);
  }
}
