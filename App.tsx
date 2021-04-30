import * as React from 'react';

import { AuthProvider } from './app/stores/AuthStore';
import Home from './app/navigation/Home';

const App = () => {
    return (
        <AuthProvider>
            <Home />
        </AuthProvider>
    );
}

export default App;