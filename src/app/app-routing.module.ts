import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MediumComponent } from './medium/medium.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'layouts/:player_id', component: LayoutsComponent },
  { path: 'medium/:player_id', component: MediumComponent },
  { path: 'play/:player_id', component: PlayComponent },
  { path: '',   redirectTo: '/players', pathMatch: 'full' },
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
