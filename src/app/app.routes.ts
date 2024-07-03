import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './Pages/auth-callback/auth-callback/auth-callback.component';
import { AuthGuardService } from '../shared/guard/auth-guard.servie';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/Pages/pages.module').then(m => m.PagesModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'auth-callback', 
        component:AuthCallbackComponent
    }
];
