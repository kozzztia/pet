import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SIZES} from '../styles';
import {useTheme} from '../providers/ThemeProvider';
import {useAsyncStorage} from '../providers/AsyncStoragProvider';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  const {backgroundThemeColor, titleThemeColor, dark} = useTheme();
  const {storedValue, saveValue} = useAsyncStorage();
  const [inputValue, setInputValue] = React.useState('');
  return (
    <SafeAreaView style={[styles.layout]}>
      <StatusBar
        barStyle={!dark ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundThemeColor}
        animated={false}
      />
      <View>
        <Text style={{color: titleThemeColor}}>
          Stored Value: {storedValue}
        </Text>
        <TextInput
          style={{color: titleThemeColor}}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter a value"
          placeholderTextColor={titleThemeColor}
        />
        <Button title="Save Value" onPress={() => saveValue(inputValue)} />
        <Button title="RESET" onPress={() => saveValue('')} />
      </View>
      <ScrollView
        style={[styles.container, {backgroundColor: backgroundThemeColor}]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    padding: SIZES.mainPadding,
  },
});
