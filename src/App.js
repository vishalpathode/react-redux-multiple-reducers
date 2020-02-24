import React from 'react';
import './App.css';

import {Provider} from 'react-redux'
// store typically imports in app component so evey component can use if
import store from './redux/Store'
import HookUseSelectorDispatchIceCreamContainer from './components/HookUseSelectorDispatchIceCreamContainer';
import HookUseSelectorDispatchCakeContainer from './components/HookUseSelectorDispatchCakeContainer';
import HookUseSelectorDispatchChoclateContainer from './components/HookUseSelectorDispatchChoclateContainer';
import UserValueToReducerSweetContainer from './components/UserValueToReducerSweetContainer';

function App() {
  return (
    // we are providing store to every component
    <Provider store={store}>
      <div className="App">
        <HookUseSelectorDispatchCakeContainer></HookUseSelectorDispatchCakeContainer>
        <HookUseSelectorDispatchIceCreamContainer></HookUseSelectorDispatchIceCreamContainer>
        <HookUseSelectorDispatchChoclateContainer></HookUseSelectorDispatchChoclateContainer>
        <UserValueToReducerSweetContainer></UserValueToReducerSweetContainer>
      </div>
    </Provider>
  );
}

export default App;
