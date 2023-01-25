import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artistDetails.component.html',
  styleUrls: ['./artistDetails.component.css'],
})
export class ArtistDetailsComponent {
  mbid: any;
  artist: any;

  constructor(private route: ActivatedRoute) {}
  async getArtistInfo() {
    const apiKey = environment.apiKey;

    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${this.mbid}&api_key=${apiKey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(this.mbid);
    console.log(data);
    this.artist = data.artist;
  }

  async ngOnInit() {
    this.mbid = this.route.snapshot.paramMap.get('artistId');
    await this.getArtistInfo();
  }
}
