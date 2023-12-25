import * as React from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {locationType} from '../../types/locationsTypes';
import {useTheme} from '../../providers/ThemeProvider';
import {COLORS, SIZES} from '../../styles';
import {CustomButton} from '../ui/Buttons';
import {ScreenNavigationProp} from '../../types/navigationsType';

type locationCardProps = {
  data: locationType;
  style?: StyleProp<ViewStyle>;
  navigation: ScreenNavigationProp;
};

const LocationCard: React.FC<locationCardProps> = React.memo(
  ({data, style, navigation}) => {
    const {navigationThemeColor} = useTheme();
    const screenHeight = Dimensions.get('window').height;
    const cardHeight =
      (screenHeight - 8 * SIZES.mainMargin - 2 * SIZES.minComtainerHeight) / 4;
    return (
      <View
        style={[
          style,
          styles.card,
          {backgroundColor: navigationThemeColor, minHeight: cardHeight},
        ]}>
        <Text style={styles.title}>{data.url}</Text>
        <CustomButton
          style={styles.button}
          // handler={() => navigation.navigate('Game')}
          handler={() => console.log(data)}
          title={'Game'}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  card: {
    borderRadius: SIZES.radius,
    padding: SIZES.mainPadding,
    margin: SIZES.mainMargin,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: SIZES.mainSize,
    fontWeight: 'bold',
    gap: SIZES.gap,
  },
  button: {
    marginTop: 'auto',
  },
});

export default LocationCard;
