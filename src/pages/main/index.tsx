import { ImageSourcePropType } from 'react-native';

import { ImageBackground, Container } from './styles';
import MainBackgroundImage from '../../images/main-background.png';

const Main = () => {
  return (
    <ImageBackground source={MainBackgroundImage as ImageSourcePropType} resizeMode="cover">
      <Container />
    </ImageBackground>
  );
};

export default Main;
