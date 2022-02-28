import { ServicosService } from './../../services/servicos.service';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { catchError, delay, Observable, of } from 'rxjs';
import { Iatacao } from 'src/app/model/atacao';



@Component({
  selector: 'app-atadas',
  templateUrl: './atadas.component.html',
  styleUrls: ['./atadas.component.css']
})
export class AtadasComponent implements OnInit {
  atacaoL: Iatacao[] = [];
  qnt: any[]=[this.atadasServices.APICont]




  constructor(private atadasServices: ServicosService) {}


  ngOnInit(): void {
    this.carregar();




  }

  carregar(){
    this.atadasServices.atadasList().subscribe(retorno =>{
      this.atacaoL = retorno;
    })
  }

  cont(cont: string){
    this.atadasServices.ContList()
    console.log(this.cont)
    return cont
  }


 deletar(atacao: Iatacao):void{
  this.atadasServices.excluir(atacao._id).subscribe(()=>{
    this.atadasServices.exbirMensagem(
      '',
      ` Excluido com sucesso`,
      'toast-success'

    );
    window.location.reload();
  }
  );

}

AttTab(){
  window.location.reload();
}


}

