import * as React from 'react';

import {Linking, StyleSheet, Text, View} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

export default function QrCodeOrganism() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {checkInverted: true},
  );

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  React.useEffect(() => {
    if (
      barcodes &&
      barcodes.length &&
      barcodes[0] &&
      barcodes[0].displayValue
    ) {
      Linking.canOpenURL(barcodes[0].displayValue).then(() => {
        Linking.openURL(barcodes[0].displayValue!);
      });
    }
  }, [barcodes]);

  return device != null && hasPermission ? (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
      />
    </>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>
        Veuillez accepter les permissions de l'app pour Afficher le Scanner
      </Text>
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
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
