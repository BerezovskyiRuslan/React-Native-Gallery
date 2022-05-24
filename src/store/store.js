import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import {rootWatcher} from './saga/index';
import {imagesReducer} from './slices/images/images.slices';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
  middleware: [...middleware],
});

sagaMiddleware.run(rootWatcher);

export {store};
