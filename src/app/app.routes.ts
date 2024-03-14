import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { EdicaoClientesComponent } from './edicao-clientes/edicao-clientes.component';
import { AutenticarUsuarioComponent } from './autenticar-usuario/autenticar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';

export const routes: Routes = [
    {
        /* mapeamento da rota raiz do projeto */
        path: '', pathMatch: 'full', redirectTo: '/autenticar-usuario'
    },
    {
        path: 'autenticar-usuario',
        component: AutenticarUsuarioComponent
    },
    {
        path: 'criar-usuario',
        component: CriarUsuarioComponent
    },
    {
        path: 'clientes-cadastro',
        component: CadastroClientesComponent
    },
    {
        path: 'clientes-consulta',
        component: ConsultaClientesComponent
    },
    {
        path: 'clientes-edicao/:id',
        component: EdicaoClientesComponent
    }
];