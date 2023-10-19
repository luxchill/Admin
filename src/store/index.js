import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ==============================|| REDUX - MAIN STORE ||============================== //

// const store = createStore(reducer);
const persister = 'Free';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

let persistor = persistStore(store);

export { store, persister, persistor };
