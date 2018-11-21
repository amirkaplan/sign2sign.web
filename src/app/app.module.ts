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


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    LayoutComponent,
    WindowsComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
