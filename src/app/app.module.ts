import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ArtistDetailsComponent } from './artist-details/artistDetails.component';
import { comparison } from './comparison/comparison.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'details/:artistId', component: ArtistDetailsComponent },
  { path: 'comparison', component: comparison },
];
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ArtistDetailsComponent,
    comparison,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
