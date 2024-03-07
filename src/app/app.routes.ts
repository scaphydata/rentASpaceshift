import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { Spaceshift1Component } from './spaceshift1/spaceshift1.component';
import { Spaceshift2Component } from './spaceshift2/spaceshift2.component';
import { Spaceshift3Component } from './spaceshift3/spaceshift3.component';
import { Spaceshift4Component } from './spaceshift4/spaceshift4.component';
import { Spaceshift5Component } from './spaceshift5/spaceshift5.component';
import { Spaceshift6Component } from './spaceshift6/spaceshift6.component';
import { Spaceshift7Component } from './spaceshift7/spaceshift7.component';

export const routes: Routes = [

{ path:'index', component: PresentationPageComponent},
{ path:'header', component: HeaderComponent},
{ path:'main', component: MainComponent},
{ path:'footer', component: FooterComponent},
{ path:'spaceshift1page', component: Spaceshift1Component},
{ path:'spaceshift2page', component: Spaceshift2Component},
{ path:'spaceshift3page', component: Spaceshift3Component},
{ path:'spaceshift4page', component: Spaceshift4Component},
{ path:'spaceshift5page', component: Spaceshift5Component},
{ path:'spaceshift6page', component: Spaceshift6Component},
{ path:'spaceshift7page', component: Spaceshift7Component},
{ path: '',redirectTo: 'index', pathMatch:'full'},
{ path: '**',redirectTo: 'index', pathMatch:'full'}




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }