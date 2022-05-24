import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import {ImagesActionsCreator} from '../../slices/images/images.slices';

const api =
  'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

const getImagesFromApi = () => axios.get(api);

function* getImagesWorker() {
  try {
    const {data} = yield call(getImagesFromApi);
    const filterData = data.map(item => {
      return {
        id: item.id,
        urls: item.urls,
        description: item.description,
        created_at: item.created_at,
        user: item.user.name,
      };
    });
    yield put(ImagesActionsCreator.setImages(filterData));
  } catch (e) {
    yield put(
      ImagesActionsCreator.setError('Upps... is loading image error...'),
    );
  }
}

function* actionIsLoadingWorker() {
  yield put(ImagesActionsCreator.setIsLoading());
  yield put(ImagesActionsCreator.actionIsLoading());
}

function* imageWatcher() {
  yield takeEvery(
    ImagesActionsCreator.asyncGetImages().type,
    actionIsLoadingWorker,
  );
  yield takeEvery(ImagesActionsCreator.actionIsLoading().type, getImagesWorker);
}

export {imageWatcher};
