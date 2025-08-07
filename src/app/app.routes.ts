import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contactus } from './components/contactus/contactus';
import { Login } from './components/login/login';
import { Pagenotfound } from './components/pagenotfound/pagenotfound';
import { Menu } from './components/menu/menu';
import { Reservation } from './components/reservation/reservation';
import { Orderonline } from './components/orderonline/orderonline';

export const routes: Routes = [
    {
        path:"",component:Home
    },
     {
        path:"home",component:Home
    },{
        path:"about",component:About
    },{
        path:"contactus",component:Contactus
    },{
        path:"login",component:Login
    },{
        path:"menu",component:Menu
    },{
        path:"reservation",component:Reservation
    },{
        path:"orderonline",component:Orderonline
    }
    ,
    {
        path:"**",component:Pagenotfound
    }

];
