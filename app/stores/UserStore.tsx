import { makeObservable, observable } from 'mobx';

import React from 'react';

class UserStore {
    users = require('../data/users.json')

    constructor() {
        makeObservable(this, {
            users: observable,
        });
    }

    addUser(user: any) {
        this.users.push(user)
    }
}

const userStore = new UserStore();

export const UserStoreContext = React.createContext(userStore);
export const useUserStore = () => React.useContext(UserStoreContext)
