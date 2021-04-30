import { makeObservable, observable } from 'mobx';

import React from 'react';

class IsoStore {
    iso = require('../data/iso.json')

    constructor() {
        makeObservable(this, {
            iso: observable,
        })
    }
}

const isoStore = new IsoStore();

export const IsoStoreContext = React.createContext(isoStore);
export const useIsoStore = () => React.useContext(IsoStoreContext)
