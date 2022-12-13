import React, {useEffect, useState} from 'react';
import {Borns, Born} from '../../types/borns';
import {MapOrganism} from '../organisms';
import Toast from 'react-native-toast-message';

interface Props {}

export default function MapContainer({}: Props) {
  const [borns, setborns] = useState<Borns>();

  useEffect(() => {
    getBorns();
  }, []);

  const getBorns = async () => {
    const fetchBorns: Borns = require('../templates/borns.json');
    const reverseCordinatesBorns: Born[] = fetchBorns.map(el => ({
      ...el,
      coordonneesXY: el.coordonneesXY.reverse() as [number, number],
    }));
    setborns(reverseCordinatesBorns);
  };

  const onActionOnBorn = (id: string) => {
    console.log('id', id);

    Toast.show({
      type: 'info',
      text1: 'Indisponible',
      text2: "Cette fonctionnalité n'est pas encore disponible",
    });
  };

  return <MapOrganism onActionOnBorn={onActionOnBorn} borns={borns} />;
}
