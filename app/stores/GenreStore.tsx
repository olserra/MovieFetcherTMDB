import { makeObservable, observable } from 'mobx';

import React from 'react';

class GenreStore {
    genres = require('../data/genres.json')

    constructor() {
        makeObservable(this, {
            genres: observable,
        })
    }
}

const genreStore = new GenreStore();

export const GenreStoreContext = React.createContext(genreStore);
export const useGenreStore = () => React.useContext(GenreStoreContext)
