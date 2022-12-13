import {View, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {Button} from '../atoms';

interface Props {
  goToMaps: () => void;
  goToForm: () => void;
  goToScan: () => void;
}

export default function SelectActionOrganism({
  goToMaps,
  goToForm,
  goToScan,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={images.driveco}
        resizeMode="contain"
      />

      <ScrollView>
        <View style={styles.buttonView}>
          <Button onPress={goToScan} title="Scan" style={styles.button} />
          <Button onPress={goToMaps} title="Maps" style={styles.button} />
          <Button onPress={goToForm} title="Formulaire" style={styles.button} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 200,
    width: 'auto',
    marginTop: 10,
    marginBottom: 40,
    backgroundColor: 'white',
  },
  buttonView: {
    marginHorizontal: 40,
  },
  button: {
    marginBottom: 40,
    backgroundColor: '#136397',
  },
});
