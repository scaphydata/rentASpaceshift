import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [

{ path:'index', component: PresentationPageComponent},
{ path:'header', component: HeaderComponent},
{ path:'main', component: MainComponent},
{ path:'footer', component: FooterComponent},
{ path: '',redirectTo: 'index', pathMatch:'full'},
{ path: '**',redirectTo: 'index', pathMatch:'full'}




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }