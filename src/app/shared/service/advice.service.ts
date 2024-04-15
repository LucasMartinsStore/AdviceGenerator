import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slip } from '../../interface/slip.interface';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  readonly URL_API = 'https://api.adviceslip.com/advice';
  constructor(private httpClient: HttpClient) {}

  getSlip(): Observable<Slip> {
    return this.httpClient.get<Slip>(this.URL_API);
  }
}
