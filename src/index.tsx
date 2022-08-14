import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModalState} from './context/ModalContext'
import {BrowserRouter} from 'react-router-dom'
import store, {persistor} from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <ModalState>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ModalState>
  </BrowserRouter>
)
