import { Animated } from 'react-native';
import styled from 'styled-components/native';

const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

const Container = styled(Animated.View)`
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
`;

export { ImageBackground, Container };
