import {all, fork} from 'redux-saga/effects';
import {imageWatcher} from './images/imges.saga';

export function* rootWatcher() {
  yield all([fork(imageWatcher)]);
}
