import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ArtistDetailsComponent } from './artist-details/artistDetails.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'details/:artistId', component: ArtistDetailsComponent },
];
@NgModule({
  declarations: [AppComponent, TestComponent, ArtistDetailsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
