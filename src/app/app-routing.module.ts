import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consulta-cep',
    pathMatch: 'full'
  },
  {
    path: 'consulta-cep',
    loadChildren: () => import('./consulta-cep/consulta-cep.module').then( m => m.ConsultaCepPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
