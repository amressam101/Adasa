import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Blog } from './components/blog/blog';


export const routes: Routes = [
    {path: "" , redirectTo: "home" , pathMatch:"full"},
    {path: "home", component: Home},
    {path: "blog" , component: Blog},
    {path: "about" , component: About},
    {path: "privacy" , loadComponent: ()=> import("./components/privacy/privacy").then( (c)=> c.Privacy)},
    {path: "term" , loadComponent: ()=> import("./components/term/term").then( (c)=> c.Term)},
    {path: "**" , loadComponent: ()=> import('./components/notfound/notfound').then( (c)=> c.Notfound)},
];
