import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ImagesActionsCreator} from '../store/slices/images/images.slices';
import {ModalImageItem} from '../components/gallery/ModalImageItem';
import {GalleryImageItem} from '../components/gallery/GalleryImageItem';
import {HeaderGallery} from '../components/gallery/HeaderGallery';

export const Gallery = () => {
  const {images} = useSelector(state => state);

  const [imageData, setImageData] = React.useState({});
  const [listGallery, setListGallery] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ImagesActionsCreator.asyncGetImages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValueInImageData = value => {
    setImageData(value);
  };

  const closeImage = () => {
    setImageData({});
  };

  if (images.loading) {
    return (
      <View style={[styles.containerMessage]}>
        <Text style={[styles.message]}>Loading...</Text>
      </View>
    );
  }

  if (images.error) {
    return (
      <View style={[styles.containerMessage]}>
        <Text style={[styles.message]}>{images.error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.containerGallery]}>
      <HeaderGallery
        list={listGallery}
        returnList={() => setListGallery(!listGallery)}
      />
      {!!Object.keys(imageData).length && (
        <ModalImageItem
          visible={!!Object.keys(imageData).length}
          imageData={imageData}
          closeImage={closeImage}
        />
      )}
      {listGallery ? (
        <FlatList
          key={'list'}
          keyExtractor={item => item.id}
          data={images.image}
          numColumns={'1'}
          renderItem={item => (
            <GalleryImageItem
              isListDisplay={listGallery}
              imageData={item.item}
              openImageFull={value => setValueInImageData(value)}
            />
          )}
        />
      ) : (
        <FlatList
          key={'grid'}
          keyExtractor={item => item.id}
          data={images.image}
          numColumns={'2'}
          renderItem={item => (
            <GalleryImageItem
              isListDisplay={listGallery}
              imageData={item.item}
              openImageFull={value => setValueInImageData(value)}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMessage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  message: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  containerGallery: {
    width: '100%',
    height: '100%',
  },
});
