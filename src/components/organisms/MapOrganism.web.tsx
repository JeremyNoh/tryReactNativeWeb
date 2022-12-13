import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Borns} from '../../types/borns';

interface Props {
  borns?: Borns;
  onActionOnBorn: (id: string) => void;
}

export default function MapOrganism({}: Props) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text>blablabla</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconPin: {
    height: 35,
    width: 35,
  },
});
