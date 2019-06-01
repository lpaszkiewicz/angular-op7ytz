import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponents, AppRoutes } from './app.routing';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { ArtComponent } from './art/art.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ArtListComponent } from './art-list/art-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { SportsComponent } from './sports/sports.component';
import { PeopleComponent } from './people/people.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtComponent,
    AppNavbarComponent,
    ArtListComponent,
    InfoComponent,
    FooterComponent,
    SportsComponent,
    PeopleComponent,
    MoviesComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export const routerConfig: Routes = [
    {
        path: 'art',
        component: ArtComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: '',
        redirectTo: '/art',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/art',
        pathMatch: 'full'
    }
];
