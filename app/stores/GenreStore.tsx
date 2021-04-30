import { makeObservable, observable } from 'mobx';

import React from 'react';

class GenreStore {
    genres =
        //require json
        {
            "12": { "name": "Adventure" },
            "14": { "name": "Fantasy" },
            "16": { "name": "Animation" },
            "18": { "name": "Drama" },
            "27": { "name": "Horror" },
            "28": { "name": "Action" },
            "35": { "name": "Comedy" },
            "36": { "name": "History" },
            "37": { "name": "Western" },
            "53": { "name": "Thriller" },
            "80": { "name": "Crime" },
            "99": { "name": "Documentary" },
            "878": { "name": "Science Fiction" },
            "9648": { "name": "Mystery" },
            "10402": { "name": "Music" },
            "10749": { "name": "Romance" },
            "10751": { "name": "Family" },
            "10752": { "name": "War" },
            "10770": { "name": "TV Movie" }
        }

    constructor() {
        makeObservable(this, {
            genres: observable,
        })
    }
}

const genreStore = new GenreStore();

export const GenreStoreContext = React.createContext(genreStore);
export const useGenreStore = () => React.useContext(GenreStoreContext)
