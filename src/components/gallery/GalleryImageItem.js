import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const GalleryImageItem = props => {
  const {urls, user, description} = props.imageData;
  const {isListDisplay, openImageFull} = props;

  return (
    <TouchableOpacity
      style={
        isListDisplay
          ? styles.containerTouchImageItemFull
          : styles.containerTouchImageItemFifty
      }
      onPress={() => openImageFull(props.imageData)}>
      <View style={[styles.containerImageItem]}>
        <ImageBackground source={{uri: urls.full}} style={[styles.image]}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{user}</Text>
            {!!description && <Text style={styles.text}>{description}</Text>}
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
  },
  containerImageItem: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  containerTouchImageItemFull: {
    padding: 5,
    width: '100%',
  },
  containerTouchImageItemFifty: {
    padding: 5,
    width: '50%',
  },
  textContainer: {
    opacity: 0.6,
    width: '100%',
    backgroundColor: '#000',
    bottom: 0,
  },
  text: {
    padding: 10,
    opacity: 1,
    fontSize: 14,
    width: '100%',
    color: '#FFF',
  },
});
