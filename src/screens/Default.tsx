import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Layout} from '../layouts';
import {Title} from '../components/ui/Text';
import {dictionary} from '../consts/dictionary';
import {useTheme} from '../providers/ThemeProvider';

const DefaultScreen: React.FC = () => {
  const {message} = dictionary.default;
  const {backgroundThemeColor} = useTheme();
  return (
    <Layout>
      <View
        style={{...styles.container, backgroundColor: backgroundThemeColor}}>
        <View style={styles.image}>
          <Image
            source={require('../assets/image/start.png')}
            style={styles.start}
          />
        </View>
        <Title title={message} style={styles.title} />
      </View>
    </Layout>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  start: {
    flex: 1,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
