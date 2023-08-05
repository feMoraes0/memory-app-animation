import MainBackgroundImage from '@assets/images/main-background.png';
import { useEffect } from 'react';
import { Animated, ImageSourcePropType, Dimensions } from 'react-native';

import { ImageBackground, Container } from './styles';

const { height: kScreenHeight, width: kScreenWidth } = Dimensions.get('screen');
const kInitialContainerSize = 100;
const kCenterContainerPosition = (kScreenHeight - kInitialContainerSize) / 2;

const Main = () => {
  const translateY = new Animated.Value(0);
  const resizeAnimation = new Animated.Value(0);

  useEffect(() => {
    const parallelDuration = 800;

    Animated.sequence([
      Animated.spring(translateY, {
        toValue: kCenterContainerPosition,
        bounciness: 16,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(resizeAnimation, {
          toValue: 1,
          duration: parallelDuration,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: parallelDuration,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <ImageBackground source={MainBackgroundImage as ImageSourcePropType} resizeMode="cover">
      <Container
        style={{
          width: resizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [kInitialContainerSize, kScreenWidth],
          }),
          height: resizeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [kInitialContainerSize, kScreenHeight],
          }),
          transform: [{ translateY }],
        }}
      />
    </ImageBackground>
  );
};

export default Main;
