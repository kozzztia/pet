import * as React from 'react';
import {FlatList, StyleSheet, useWindowDimensions} from 'react-native';
import {SIZES} from '../../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/navigationsType';
import {Location} from '../../types/locationType';
import LocationCard from './LocationCard';
import {useTheme} from '../../providers/ThemeProvider';

interface LocationsListProps {
  locations: Location[] | undefined;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const LocationsList: React.FC<LocationsListProps> = ({
  locations,
  navigation,
}) => {
  const height = useWindowDimensions().height;
  const {navigationThemeColor} = useTheme();
  return (
    <FlatList
      style={{
        ...styles.list,
        maxHeight: height - 195,
        borderTopColor: navigationThemeColor,
      }}
      data={locations}
      renderItem={({item}) => (
        <LocationCard
          data={item}
          style={styles.card}
          navigateHandler={() => navigation.navigate('Game', {game: item.id})}
        />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default LocationsList;
const styles = StyleSheet.create({
  list: {
    paddingTop: SIZES.mainPadding,
    borderTopWidth: 1,
  },
  card: {
    marginBottom: 20,
  },
});
