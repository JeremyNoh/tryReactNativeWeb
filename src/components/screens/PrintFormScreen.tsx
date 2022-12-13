import React from 'react';
import {PrintFormContainer} from '../containers';
import {RouteProp, useRoute} from '@react-navigation/native';

type ParamList = {
  PrintForm: {
    info: {nom: string; email: string; postal: string};
  };
};

export default function PrintFormScreen() {
  const params = useRoute<RouteProp<ParamList, 'PrintForm'>>().params;
  const info: {nom: string; email: string; postal: string} =
    params && params.info;

  return <PrintFormContainer infoForm={info} />;
}
