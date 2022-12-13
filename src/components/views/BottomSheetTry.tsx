import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Button} from '../atoms';

export default function BottomSheetTry() {
  // ref
  // const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '10%', '75%', '100%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const [offestHeightBottomSheet, setoffestHeightBottomSheet] = useState(0);
  const onChangeBottomSheet = (index: number) => {
    const snapPointForMultipleToHeightScreen = [1, 0.95, 0.9, 0.25, 0];
    if (index !== -1) {
      setoffestHeightBottomSheet(
        Dimensions.get('screen').height *
          snapPointForMultipleToHeightScreen[index],
      );
    }
  };

  return (
    <>
      <View style={styles.viewbutton}>
        <Button
          style={styles.button}
          onPress={handlePresentModalPress}
          title="👌 bottom Sheet"
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={2}
        enablePanDownToClose
        snapPoints={snapPoints}
        style={styles.bottomSheet}
        onChange={onChangeBottomSheet}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Text>Borne id : #0848AD492</Text>
          <ScrollView
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              paddingBottom: offestHeightBottomSheet,
            }}>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
            <Text style={{marginVertical: 20}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              unde harum, laudantium totam quia consectetur itaque magni quos
              soluta omnis facilis nobis asperiores. Veritatis tempore quo,
              harum velit laboriosam illo?
            </Text>
          </ScrollView>
        </View>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  viewbutton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    width: 200,
    marginVertical: 10,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
