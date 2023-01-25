import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  artists: any;
  country: string = 'spain';
  mbid: any;
  selectedCountry: string = 'spain';

  onCountrySelection(event: any) {
    this.country = event.target.value;
    this.getTopArtist();
  }
  async getTopArtist() {
    const apiKey = environment.apiKey;
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.country}&api_key=${apiKey}&page=1&limit=10&format=json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.artists = data.topartists.artist;
      this.mbid = data.topartists.artist.map((artist: any) => {
        return artist.mbid;
      });
      console.log(this.artists);
      console.log(this.mbid);
    } catch (error) {
      console.error(error);
    }
  }
  async getArtistInfo() {
    const apiKey = environment.apiKey;

    for (let id of this.mbid) {
      const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${id}&api_key=${apiKey}&format=json`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.artist);
    }
  }
  async ngOnInit() {
    await this.getTopArtist();
    this.getArtistInfo();
  }
}
