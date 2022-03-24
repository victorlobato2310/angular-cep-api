import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/cep.model';
import { CepService } from 'src/app/cep.service';

@Component({
  selector: 'app-cep-buscar',
  templateUrl: './cep-buscar.component.html',
  styleUrls: ['./cep-buscar.component.css']
})
export class CepBuscarComponent implements OnInit {

  titulo: string = 'busca de cep com via cep api';
  
  estaVazio: boolean = false;

  cep: Cep = {
    cep: '',
    logradouro: '',
    localidade: '',
    uf: ''
  }

  constructor(private service: CepService) { }

  ngOnInit(): void {
  }

  buscarCep(): void {
    this.service.buscarCep(this.cep).subscribe( cep => {
      this.estaVazio = false;
      this.cep.cep = cep.cep;
      this.cep.logradouro = cep.logradouro;
      this.cep.localidade = cep.localidade;
      this.cep.uf = cep.uf;
      this.service.mostrarMensagem('CEP encontrado com sucesso.');
      
      setTimeout(() => {
        this.cep.cep = '';
        this.cep.logradouro = '';
        this.cep.localidade = '';
        this.cep.uf = '';
      }, 4000);
    },
    error => {
      if(this.cep.cep === ''){
        this.estaVazio = true;
      }else {
        this.service.mostrarMensagem('Impossível encontrar CEP.');
        this.cep.cep = '';
        this.cep.logradouro = '';
        this.cep.localidade = '';
        this.cep.uf = '';
        this.estaVazio = false;
      }
    });
  }
}
