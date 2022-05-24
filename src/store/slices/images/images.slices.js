import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  image: [],
  loading: false,
  error: '',
};

const asyncGetImages = () => ({type: 'ASYNC_GET_IMAGE'});
const actionIsLoading = () => ({type: 'ACTION_IS_LOADING'});

const {reducer, actions} = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.image = action.payload;
      state.loading = false;

      return state;
    },
    setIsLoading: (state, action) => {
      state.loading = true;

      return state;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;

      return state;
    },
  },
});

const ImagesActionsCreator = {
  ...actions,
  asyncGetImages,
  actionIsLoading,
};

export {ImagesActionsCreator, reducer as imagesReducer};
