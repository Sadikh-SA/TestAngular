import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from  './Utilisateur';
import { Partenaire } from  './Partenaire';
import { Observable, from } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
    
  }
  PHP_API_SERVER = "http://127.0.0.1:8000";

  listerUtilisateur(): Observable<Utilisateur[]>{
    return this.httpClient.get<any[]>(`${this.PHP_API_SERVER}/filrouge/lister/user`);
  }
  listerPartenaire(): Observable<Partenaire[]>{
    return this.httpClient.get<any[]>(`${this.PHP_API_SERVER}/filrouge/lister/partenaire`);
  }
}
