![screens](https://user-images.githubusercontent.com/31896900/116779933-1711c900-aa71-11eb-8fd2-5627fad649e4.png)

<!-- ABOUT THE PROJECT -->
## About The Project

The MovieFetcherTMDB is a React Native app that relies on TMDB API, that shows the most mopular movies, with the cover, actors, producers, year, title, trailer, language and genre, and also the rating.

Screens:
* The home brings us a list that can be filtered by date (releases or old), popularity (most or less) and revenue (higher). On the home screen you can also arrange the films in a single column or on 2 columns.
* The search view gives the user a search bar and a list of genres as well.
* The more view allow the user to share the app, rate it, shows the actual version and have a Sign Out button.
* The film details shows the trailer, actors and producers.

### Built With

The app was developed using React Native cli (bare) with Typescript as the main language. A part of that, here is a list with some of the technologies, libraries or features I am using:

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

### Installation

1. Get a free API Key at [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)
2. Clone the repo
   ```sh
   git clone https://github.com/olserra/MovieFetcherTMDB
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```JS
   API_KEY = 'ENTER YOUR API';
   ```

<!-- NEXT STEPS -->
## Final considerations

### Known issues limitation
* DetoX
* .env
* App size
* (test scenario) What happens if the server is down? 
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
* Optimizations to save device baterry
* Alerts for bad / slow connection
* Minimize the Payload with cache
* Accessibility
* 2 factor auth
