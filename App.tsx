import * as React from 'react';

import { AuthProvider } from './app/providers/AuthProvider';
import Home from './app/navigation/Home';
import { NavigationStack } from './app/screens';

const App = () => {
    return (
        <AuthProvider>
            <Home />
        </AuthProvider>
    );
}

export default App;