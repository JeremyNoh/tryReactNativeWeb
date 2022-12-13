import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface Props {
  infoForm: {nom: string; email: string; postal: string};
}

export default function PrintFormOrganism({infoForm}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.contentPrint}>
        <Text style={[styles.text, styles.title]}>Info Formulaire</Text>
        <Text style={styles.text}>Nom : {infoForm.nom}</Text>
        <Text style={styles.text}>Email : {infoForm.email}</Text>
        <Text style={styles.text}>Code Postal : {infoForm.postal}</Text>
      </View>
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
  contentPrint: {
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    borderColor: '#3AA4DC',
    borderRadius: 13,
    borderWidth: 2,
    width: '80%',
  },
  title: {
    textTransform: 'uppercase',

    color: '#136397',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    textAlign: 'left',
    marginBottom: 30,
  },
});
