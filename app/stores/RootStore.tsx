import AuthStore from './AuthStore';
import SettingsStore from './SettingsStore.js';
import UserStore from './UserStore.js';
import { create } from 'mobx-persist';

const hydrate = create({
    storage: AsyncStorage,
    jsonify: true,
});

class RootStore {
    AuthStore = AuthStore;
    UserStore = UserStore;
    SettingsStore = SettingsStore;

    constructor() {
        Promise.all([
            hydrate('auth', this.AuthStore),
            hydrate('user', this.UserStore),
            hydrate('settings', this.SettingsStore).then(() => this.SettingsStore.initData()),
        ])
            .then(() => finishedLoading());
    }
};

export default new RootStore();