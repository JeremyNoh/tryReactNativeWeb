import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default function QrCodeOrganism() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Veuillez accepter les permissions de l'app pour Afficher le Scanner
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
