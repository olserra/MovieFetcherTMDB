![Cine: The Movie Guide](./resources/demo.png)

<!-- ABOUT THE PROJECT -->
## About The Project

The MovieFetcherTMDB is React Native app that relies on TMDB API, that show all the Most Popular movies, with the cover, year, title, language and genre, and also the rating.

Screens:
* The home brings us a list that can be filtered by date (releases or old), popularity (most or less) and revenue (higher). On the home screen you can also arrange the films in a single column or on 2 columns.
* The search view gives the user a search bar and a list of genres as well.
* The more view allow the user to share the app, rate it, shows the actual version and have a Sign Out button.
* The film details shows the trailer, actors and producers.

### Built With

The app was developed using React Native cli (bare) with Typescript as the main language. A part of that, here is a list with some of the technologies, libraries or features I am using:

* [DetoX]
* [MobX]
* [Navigation 5.x]
* [Jest]
* [Eslint]
* [Async Storage]
* [Typescript]
* [Expo components]


<!-- GETTING STARTED -->
## Getting Started

Here there're some instructions for you to set up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)
2. Clone the repo
   ```sh
   [git clone https://github.com/your_username_/Project-Name.git](https://github.com/olserra/MovieFetcherTMDB)
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```JS
   const API_KEY = 'ENTER YOUR API';
   ```



<!-- NEXT STEPS -->
## Nice to have in a near future

### Known issues limitation (high level)
* Architecture (DDD)
* Improve tests (DetoX with Jest)
* App size

### Tests to implement
* (scenario) What happens if the server is down? 
* Memory issues? Do we have cache? 
* Error handling?
* Bad connection
* Old devices
* Smaller resolutions
* Unit tests

### Features to implement
* Monitoring system (Firebase for trackability and have a crashrate)
* Click monitoring with stats
* Metrics for success (active users, clicks on films)
* Push notifications
* Gestures
* Render (WillItRender)
* Optimizations to save device baterry
* Alerts for bad / slow connection
* Minimize the Payload with cache

### Advanced
* Accessibility
* 2 factor auth
