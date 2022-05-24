import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export const ModalImageItem = props => {
  const {visible, closeImage} = props;
  const {urls, user, description} = props.imageData;
  const [showDescription, setShowDescription] = React.useState(1);
  const closeIcon = '\u2715';

  const setVisibleDescription = () => {
    setShowDescription(showDescription === 1 ? 0 : 1);
  };

  return (
    <Modal visible={visible} animationType={'slide'}>
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
        captureEvent={true}>
        <TouchableOpacity onPress={setVisibleDescription} activeOpacity={1}>
          <Image
            source={{uri: urls.full}}
            style={[styles.containerImageBackground]}
            onPress={setVisibleDescription}
          />
        </TouchableOpacity>
      </ReactNativeZoomableView>
      <View style={[styles.header, {opacity: showDescription}]}>
        <Text style={[styles.text]}>{user}</Text>
        <TouchableOpacity
          onPress={() => closeImage()}
          style={[styles.touchedClose]}>
          <Text style={[styles.iconClose]}>{closeIcon}</Text>
        </TouchableOpacity>
      </View>
      {!!description && (
        <Text style={[styles.descriptionImage, {opacity: showDescription}]}>
          {description}
        </Text>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerImageBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0, .3)',
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#FFF',
  },
  touchedClose: {
    height: 25,
    color: '#FFF',
  },
  iconClose: {
    paddingHorizontal: 5,
    height: 25,
    fontSize: 14,
    color: '#FFF',
  },
  descriptionImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 15,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0, .5)',
    justifyContent: 'center',
    color: '#FFF',
  },
});
