import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'playlist',
    component: PlaylistComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: '' }
];
