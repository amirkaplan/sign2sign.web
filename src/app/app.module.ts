import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { WindowsComponent } from './windows/windows.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { WindowComponent } from './window/window.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { MediumComponent } from './medium/medium.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { KeysPipe } from './pipes/keys';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayComponent } from './play/play.component';
import { AddLayoutComponent } from './add-layout/add-layout.component';

import {FormsModule} from '@angular/forms';
import { AddMediaComponent } from './add-media/add-media.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PlaylistMediaComponent } from './playlist-media/playlist-media.component';
import { UsersComponent } from './users/users.component';
import { ScreensComponent } from './screens/screens.component';
import { ScreenComponent } from './screen/screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    LayoutComponent,
    WindowsComponent,
    WindowComponent,
    LoginComponent,
    MediaComponent,
    MediumComponent,
    PlaylistComponent,
    PlaylistsComponent,
    PlayersComponent,
    PlayerComponent,
    KeysPipe,
    PlayerDetailsComponent,
    PageNotFoundComponent,
    PlayComponent,
    AddLayoutComponent,
    AddMediaComponent,
    PlaylistMediaComponent,
    UsersComponent,
    ScreensComponent,
    ScreenComponent
    ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
