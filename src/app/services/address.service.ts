import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private url:string = 'http://localhost:3000/api/clients/';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getClient(id: string): Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  saveClient(client: Client): Observable<any> {
    return this.httpClient.post(this.url, client);
  }

  updateClient(id: string, client: Client): Observable<any> {
    return this.httpClient.put(this.url + id, client);
  }

  deleteClient(id: string): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

}
