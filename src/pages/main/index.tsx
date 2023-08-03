import { useEffect } from 'react';
import { Animated, ImageSourcePropType, Dimensions } from 'react-native';

import { ImageBackground, Container } from './styles';
import MainBackgroundImage from '../../images/main-background.png';

const { height: kScreenHeight, width: kScreenWidth } = Dimensions.get('screen');
const kInitialContainerSize = 100;

const Main = () => {
  const translateY = new Animated.Value(0);
  const width = new Animated.Value(kInitialContainerSize);
  const height = new Animated.Value(kInitialContainerSize);

  useEffect(() => {
    const parallelDuration = 800;

    Animated.sequence([
      Animated.spring(translateY, {
        toValue: (kScreenHeight - kInitialContainerSize) / 2,
        bounciness: 16,
        useNativeDriver: false,
      }),

      Animated.parallel([
        Animated.timing(height, {
          toValue: kScreenHeight,
          duration: parallelDuration,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: kScreenWidth,
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
          width,
          height,
          transform: [{ translateY }],
        }}
      />
    </ImageBackground>
  );
};

export default Main;
