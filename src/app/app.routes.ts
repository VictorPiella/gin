import { RouterModule, Routes } from '@angular/router';

import { GinListComponent } from './components/gin-list/gin-list.component';
import { GinComponent } from './components/gin/gin.component';


const routes: Routes = [
    { path: 'home', component: GinListComponent },
    { path: 'gin/:id', component: GinComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);


// problema rutas

//https://stackoverflow.com/questions/54446512/how-do-i-have-human-readable-names-in-the-url-instead-of-id-in-angular
