import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../../environments/environment';

@Component({
  selector: 'app-autenticar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {

  //atributos
  mensagemErro: string = '';

  //método construtor
  constructor(
    private httpClient: HttpClient
  ) {}

  //criando a estrutura do formulário
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    senha : new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  //função para verificar o conteúdo do formulário
  get f() {
    return this.form.controls;
  }

  //função para capturar o evento de submit
  onSubmit(): void {
   
    this.mensagemErro = '';

    this.httpClient.post(config.apiUrlUsuarios + "/usuarios/autenticar", this.form.value,
      { responseType : 'text' })
      .subscribe({
        next: (data) => {
         
          //gravar o email do usuário e o token obtido na local storage
          localStorage.setItem(config.authEmail, this.form.value.email as string);
          localStorage.setItem(config.authToken, data as string);

          //redirecionar para a página de consulta de clientes
          location.href = "/clientes-consulta";
        },
        error: (e) => {
          this.mensagemErro = e.error;
        }
      })
  }
}