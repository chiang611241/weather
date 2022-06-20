import React from 'react';
import {Provider} from 'react-redux';
import {store} from './reducer/store';
import MainNavigation from './routes/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
