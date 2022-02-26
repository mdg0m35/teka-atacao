import { HeaderComponent } from './atacao/header/header.component';
import { AtadasComponent } from './atacao/header/atadas/atadas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'todas'},

   {path: 'todas', component:HeaderComponent},
   {path: 'atadas', component: AtadasComponent},

  //{path: 'novo', component:},
  //{path:' editar/:id', component: }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
