import React from 'react';
import {FormContainer} from '../containers';
import {useNavigation} from '@react-navigation/native';

export default function FormScreen() {
  const {navigate} = useNavigation();

  function goToInfoForm(info: {nom: string; email: string; postal: string}) {
    navigate('PrintForm' as never, {info} as never);
  }

  return <FormContainer goToInfoForm={goToInfoForm} />;
}
