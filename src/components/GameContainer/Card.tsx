import * as React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import {SIZES} from '../../styles';
import {GameResident} from '../../types/residentType';
import {useTheme} from '../../providers/ThemeProvider';

interface CardProps {
  resident: GameResident;
  handle: (residentId: string) => void;
}

const Card: React.FC<CardProps> = ({resident, handle}) => {
  const size = Dimensions.get('window').width / 4 - SIZES.mainMargin * 2;
  const {id, image, isOpen, name} = resident;
  const handleTouchStart = () => {
    handle(id as string);
  };
  const {navigationThemeColor} = useTheme();
  return (
    <View
      style={[
        styles.card,
        {width: size, height: size, backgroundColor: navigationThemeColor},
      ]}
      onTouchStart={handleTouchStart}>
      <Image
        style={[
          styles.hide,
          styles.image,
          isOpen ? styles.openImage : styles.closeImage,
          {transform: [{translateX: isOpen ? 0 : 100}]},
        ]}
        source={{uri: image as string}}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: SIZES.radius,
    margin: SIZES.mainMargin,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeImage: {},
  openImage: {},
  hide: {
    // opacity: 0.5,
  },
});
