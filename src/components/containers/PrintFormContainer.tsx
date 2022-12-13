import React from 'react';
import {PrintFormOrganism} from '../organisms';

interface Props {
  infoForm: {nom: string; email: string; postal: string};
}

export default function PrintFormContainer({infoForm}: Props) {
  return <PrintFormOrganism infoForm={infoForm} />;
}
