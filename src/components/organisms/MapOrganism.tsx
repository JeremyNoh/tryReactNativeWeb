import React, {useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import images from '../../assets/images';
import {Borns, Born} from '../../types/borns';

import {InfoBorns} from '../views';
import {MAPBOX_PRIVATE_KEY} from 'react-native-dotenv';

MapboxGL.setAccessToken(MAPBOX_PRIVATE_KEY);

interface Props {
  borns?: Borns;
  onActionOnBorn: (id: string) => void;
}

export default function MapOrganism({borns, onActionOnBorn}: Props) {
  const [selectedBorn, setselectedBorn] = useState<string>();

  const born: Born | undefined = useMemo(
    () =>
      selectedBorn && borns
        ? borns.find(el => el.id_pdc_itinerance === selectedBorn)
        : undefined,
    [selectedBorn, borns],
  );

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.UserLocation />
          <MapboxGL.Camera zoomLevel={1} followUserLocation />

          {borns &&
            borns.map(oneborn => (
              <MapboxGL.MarkerView
                key={oneborn.id_pdc_itinerance}
                id={oneborn.id_pdc_itinerance}
                coordinate={oneborn.coordonneesXY}>
                <TouchableOpacity
                  onPress={() => {
                    setselectedBorn(oneborn.id_pdc_itinerance);
                  }}>
                  <Image
                    style={styles.iconPin}
                    source={oneborn.gratuit ? images.freeBorn : images.born}
                  />
                </TouchableOpacity>
              </MapboxGL.MarkerView>
            ))}
        </MapboxGL.MapView>
      </View>
      {born && (
        <InfoBorns
          born={born}
          onClose={() => setselectedBorn(undefined)}
          onActionOnBorn={onActionOnBorn}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconPin: {
    height: 35,
    width: 35,
  },
});
