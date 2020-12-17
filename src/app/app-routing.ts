//Módulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CowsComponent } from './components/cows/cows.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactaComponent } from './components/contacta/contacta.component';
import { ErrorComponent } from './components/error/error.component';

//Array de rutas.
const appRoutes: Routes = [
    {path: '', component: CowsComponent},
    {path: 'cows', component: CowsComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'contacta', component: ContactaComponent},
    //Cuando se utiliza ** quiere decir que el componente no existe.
    {path: '**', component: ErrorComponent},
]

//Exportar el módulo de rutas.
//tipo any, está vacío
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);