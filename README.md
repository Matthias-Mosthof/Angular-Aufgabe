# Top Artists

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## General Info

### Main-view

This is the entry point of the application. It shows the 10 top artists of a certain country. A
dropdown element is present at the top of the main content view containing three predefined countries and their respective country code. One element is selected by default and the respective data is fetched upon entering the application. The results are presented in a list view. Each list element provides the user with useful information about
the artist as well as an image.

### Detail-View

This view contains a detailed portfolio of the selected artist (name, banner image, amount of listeners and plays). Furthermore two sections below the meta information present users of the app with the artists top 5 tracks and top 5 albums (Also presented in a list view with the artwork, title and play count).

### Artist-search

As already mentioned above, the search bar is present in the Navigation section. Once the user starts typing the search is performed and the results are presented to the user in a result list. A click or tap on one of the found artists opens the respective detail view.

### Side-by-Side Comparison

Upon entering this view, the screen will be split in 2 sides vertically. Each side contains a search field where users can enter the name of an artist. Once the user starts typing the search is performed and matching results are presented in a result list. If a found artist is clicked/tapped a detail view of the artist is presented below the search field. Using both sides the user is then able to compare both artists by their meta information.

## Note

LastFM doensnt provide artists Images anymore due to users abues but yet the properties are still available. But its always the same img (White star placeholder). Therefor there wont be images displayed.
