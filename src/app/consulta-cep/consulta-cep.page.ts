import { Component } from '@angular/core';
import { ViaCepService } from '../viacep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: 'consulta-cep.page.html',
  styleUrls: ['consulta-cep.page.scss']
})
export class ConsultaCepPage {
  enderecoInput: string = '';
  uf: string = '';
  localidade: string = '';
  logradouro: string = '';
  endereco: any;
  cep: any;

  constructor(private viaCepService: ViaCepService) {}

  consultarCEP() {
    if (this.enderecoInput) {

      this.viaCepService.getEnderecoByCep(this.enderecoInput).subscribe((data) => {
        this.cep = data;
      });
    }
  }
  consultarEndereco(){
    if (this.uf, this.localidade, this.logradouro){

      this.viaCepService.getEndereco(this.uf, this.localidade, this.logradouro).subscribe((data) => {
        this.endereco = data;
      });
    }
  }
}

