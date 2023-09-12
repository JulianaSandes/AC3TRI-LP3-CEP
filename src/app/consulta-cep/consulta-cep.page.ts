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

  constructor(private viaCepService: ViaCepService) {}

  consultarEndereco() {
    if (this.enderecoInput) {

      this.viaCepService.getEnderecoByCep(this.enderecoInput).subscribe((data) => {
        this.endereco = data;
      });
    }
    else {
      const dados = {
        uf: this.uf,
        localidade: this.localidade,
        logradouro: this.logradouro
      };
      this.viaCepService.getEndereco(dados).subscribe((data) => {
        this.endereco = data;
      });
    }
  }
}

