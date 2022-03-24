import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cep } from './cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  url = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  buscarCep(cep: Cep): Observable<Cep> {
    return this.http.get<Cep>(`${this.url}/${cep.cep}/json`);
  }

  mostrarMensagem(msg: string): void {
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
}
