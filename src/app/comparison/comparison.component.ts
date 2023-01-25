import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css'],
})
export class comparison {
  artist1: any;
  artist2: any;
  leftSearch: string = '';
  rightSearch: string = '';
  leftResults: any;
  rightResults: any;
  showLeftDetails: boolean = false;
  showRightDetails: boolean = false;

  constructor(private route: ActivatedRoute) {}

  async searchLeft() {
    const apiKey = environment.apiKey;
    if (this.leftSearch) {
      const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.leftSearch}&api_key=${apiKey}&format=json`;
      const response = await fetch(url);
      const data = await response.json();

      this.leftResults = data.results.artistmatches.artist;
      this.showLeftDetails = false;
    }
  }

  async searchRight() {
    const apiKey = environment.apiKey;
    if (this.rightSearch) {
      const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.rightSearch}&api_key=${apiKey}&format=json`;
      const response = await fetch(url);
      const data = await response.json();

      this.rightResults = data.results.artistmatches.artist;
      this.showRightDetails = false;
    }
  }

  async selectLeft(mbid: string) {
    const apiKey = environment.apiKey;

    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${mbid}&api_key=${apiKey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    this.showLeftDetails = true;
    this.artist1 = data.artist;
    this.leftResults = null;
  }
  async selectRight(mbid: string) {
    const apiKey = environment.apiKey;
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${mbid}&api_key=${apiKey}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    this.showRightDetails = true;
    this.rightResults = null;
    this.artist2 = data.artist;
  }
}
