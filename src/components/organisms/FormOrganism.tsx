import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Button, Input} from '../atoms';
import Toast from 'react-native-toast-message';
import useKeyboardHeight from '../../hooks/useKeyboardHeight';

interface Props {
  goToInfoForm: (info: {nom: string; email: string; postal: string}) => void;
}
export default function FormOrganism({goToInfoForm}: Props) {
  const heightKeyboard = useKeyboardHeight();

  const [info, setinfo] = useState({
    nom: '',
    email: '',
    postal: '',
  });

  const onChangePostal = (postal: any) => {
    if (
      postal == '' ||
      (postal &&
        postal
          .split('')
          .every((el: string) =>
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(el),
          ) &&
        postal.length <= 5)
    ) {
      setinfo({...info, postal});
    }
  };
  const onCheckEmailValidity = (email: string): boolean => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const onBlurPostal = () => {
    if (info.postal.length !== 5) {
      Toast.show({
        type: 'error',
        text1: 'Code Postale Incorrect',
        position: 'bottom',
      });
    }
  };

  const onBlurEmail = () => {
    if (!onCheckEmailValidity(info.email)) {
      Toast.show({
        type: 'error',
        text1: 'Email Incorrect',
      });
    }
  };

  const valideForm = useMemo(() => {
    return (
      info.email &&
      onCheckEmailValidity(info.email) &&
      info.nom &&
      info.nom.length &&
      info.postal &&
      info.postal.length === 5
    );
  }, [info]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fomulaire de Saisie</Text>

      <View style={[styles.form, {paddingBottom: heightKeyboard}]}>
        <Input
          onChange={nom => {
            setinfo({...info, nom});
          }}
          value={info.nom}
          style={styles.input}
          name="Nom"
          autoComplete="name"
        />
        <Input
          onChange={email => {
            setinfo({...info, email});
          }}
          value={info.email}
          style={styles.input}
          name="Email"
          autoComplete="email"
          onBlur={() => {
            onBlurEmail();
          }}
        />
        <Input
          onChange={onChangePostal}
          value={info.postal}
          style={styles.input}
          name="Code Postal"
          keyboardType="numeric"
          autoComplete="postal-code"
          onBlur={() => {
            onBlurPostal();
          }}
        />

        <Button
          onPress={() => goToInfoForm(info)}
          title="Valider"
          disabled={!valideForm}
          style={valideForm ? styles.button : undefined}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  form: {
    marginHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#136397',
  },
});
