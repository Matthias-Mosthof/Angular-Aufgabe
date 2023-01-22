import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  songs: any;
  country: string = 'spain';

  onCountrySelection(event: any) {
    this.country = event.target.value;
    this.fetchData();
  }

  async fetchData() {
    const apiKey = environment.apiKey;
    const artist = 'Kim Petras';
    const track = 'brrr';
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${this.country}&api_key=${apiKey}&page=1&limit=10&format=json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.songs = data.topartists.artist;
      console.log(this.songs);
    } catch (error) {
      console.error(error);
    }
  }
  async ngOnInit() {
    this.fetchData();
  }
}
