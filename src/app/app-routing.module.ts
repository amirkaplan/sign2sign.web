import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayComponent } from './play/play.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MediaComponent } from './media/media.component';
import { ScreensComponent } from './screens/screens.component';

const routes: Routes = [
  { path: 'screens', component: ScreensComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'layouts', component: LayoutsComponent },
  { path: 'media/:player_id', component: MediaComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlists/:window_id', component: PlaylistsComponent },
  { path: '',   redirectTo: '/screens', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
