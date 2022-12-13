import React from 'react';
import {SelectActionContainer} from '../containers';
import {useNavigation} from '@react-navigation/native';

export default function SelectActionScreen() {
  const {navigate} = useNavigation();

  function goToMaps() {
    navigate('Maps' as never);
  }
  function goToForm() {
    navigate('Form' as never);
  }
  function goToScan() {
    navigate('Scan' as never);
  }

  return (
    <SelectActionContainer
      goToMaps={goToMaps}
      goToForm={goToForm}
      goToScan={goToScan}
    />
  );
}
