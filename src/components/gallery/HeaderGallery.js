import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GridIcon} from '../common/icon/GridIcon';
import {ListIcon} from '../common/icon/ListIcon';

export const HeaderGallery = props => {
  const {list = false, returnList} = props;
  return (
    <View style={[styles.headerContainer]}>
      <Text style={[styles.headerTitle]}>Gallery</Text>
      <View style={[styles.containerIcon]}>
        <TouchableOpacity onPress={returnList}>
          {list ? (
            <ListIcon width={24} height={25} />
          ) : (
            <GridIcon width={25} height={25} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  headerTitle: {
    fontSize: 24,
    justifyContent: 'center',
    color: '#FFF',
    fontFamily: 'Times New Roman',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  containerIcon: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
