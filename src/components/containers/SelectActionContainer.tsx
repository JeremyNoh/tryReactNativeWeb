import React from 'react';
import {SelectActionOrganism} from '../organisms';

interface Props {
  goToMaps: () => void;
  goToForm: () => void;
  goToScan: () => void;
}
export default function SelectActionContainer({
  goToMaps,
  goToForm,
  goToScan,
}: Props) {
  return (
    <SelectActionOrganism
      goToMaps={goToMaps}
      goToForm={goToForm}
      goToScan={goToScan}
    />
  );
}
