import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ArtistDetailsComponent } from './artist-details/artistDetails.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'details/:artistId', component: ArtistDetailsComponent },
];
@NgModule({
  declarations: [AppComponent, OverviewComponent, ArtistDetailsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
