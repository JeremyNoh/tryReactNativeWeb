import React from 'react';
import {FormOrganism} from '../organisms';

interface Props {
  goToInfoForm: (info: {nom: string; email: string; postal: string}) => void;
}
export default function FormContainer({goToInfoForm}: Props) {
  return <FormOrganism goToInfoForm={goToInfoForm} />;
}
