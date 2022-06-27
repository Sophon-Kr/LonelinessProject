import React from 'react';
import Navigation from './src/routes/Navigation';
import { Provider } from "react-redux";
import configureStore from "./src/middleware/store";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>)


};

export default App;