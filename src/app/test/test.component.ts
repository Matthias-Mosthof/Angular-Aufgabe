import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  song: any;

  async ngOnInit() {
    const apiKey = environment.apiKey;
    const artist = 'Kim Petras';
    const track = 'brrr';
    const country = 'spain';
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${apiKey}&page=1&limit=10&format=json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.song = data.track;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
