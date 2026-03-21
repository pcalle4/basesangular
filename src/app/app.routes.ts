import { Routes } from '@angular/router';
import{CounterPageComponent} from './pages/counter/counter.component'
import { SecondComponent } from './pages/second/second.component';
import { DragonballPagecomponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPagecomponent } from './pages/dragonball-super/dragonball-super-page.component';




export const routes: Routes = [

{
    path: '',
    component: CounterPageComponent
},
{
    path: 'second',
    component: SecondComponent
},
{
    path:'dragonball',
    component:DragonballPagecomponent
},
{
    path:'dragonballSuper',
    component:DragonballSuperPagecomponent
},
{
    path: '**',
    redirectTo: ''
}

];
