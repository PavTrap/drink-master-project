import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';

import { BrowserRouter } from "react-router-dom";

import { store } from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="drink-master-project">          
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
	</React.StrictMode>
);
