import { environment } from './../../../environments/environment';

import { Iatacao } from './../../model/atacao';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, EMPTY, map, catchError, pipe, take, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicosService {
  private API: string = environment.API+'/atacao';


  constructor(private http: HttpClient, private toastr: ToastrService) {}

  atadasList(): Observable<Iatacao[]> {
    return this.http.get<Iatacao[]>(this.API).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }



  exibeErro(e: any): Observable<any> {
    this.exbirMensagem(
      'ERROR!',
      'Não foi possivel realizar a operação!',
      'toast-error'
    );
    return EMPTY;
  }
  exbirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }
  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  create(atacao: any) {
    return this.http.post(this.API, atacao).pipe(take(1));
  }
}
