import React, {FunctionComponent, useRef} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native';

const images: string[] = [
  'https://art.pixilart.com/05b69d5a1d184f9.gif',
  'https://art.pixilart.com/ee731822e4188fd.png',
  'https://art.pixilart.com/c4b46b7996c02b7.png',
  'https://art.pixilart.com/thumb/59d6e7d8adeb761.png',
  'https://art.pixilart.com/thumb/526413cb2e0953d.png',
  'https://art.pixilart.com/caec49633b0031a.gif',
];

const {width, height} = Dimensions.get('screen');

const Carousel: FunctionComponent = () => {
  const xScroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <Animated.FlatList
        style={style.flatList}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={'fast'}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: xScroll}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const outputRange = ['-90deg', '0deg', '90deg'];

          const translateX = xScroll.interpolate({inputRange, outputRange});

          return (
            <View style={style.imageContainer}>
              <Animated.Image
                style={[style.image, {transform: [{rotateZ: translateX}]}]}
                source={{uri: item}}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {flexGrow: 0},
  imageContainer: {
    width,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: width - 150,
    borderRadius: 20,
    resizeMode: 'cover',
  },
});

export default Carousel;