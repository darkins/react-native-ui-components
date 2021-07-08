import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Screen from './src/components/Screen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import colors from './src/config/colors';
import { ScrollView } from 'react-native-gesture-handler';

let customFonts = {
  'Mont-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
  'Mont-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
  'Mont-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
  'Mont-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
  'Mont-Italic': require('./assets/fonts/Montserrat-Italic.otf'),
};
export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Screen>
          <ScrollView>
            <Text style={styles.heading}>Typography</Text>
            <Text style={styles.h1}>H1 - Regular / 37px</Text>
            <Text style={styles.h2}>H2 - Bold / 24px</Text>
            <Text style={styles.h3}>H3 - Bold / 21px</Text>
            <Text style={styles.h4}>H4 - SemiBold / 19px</Text>
            <Text style={styles.h5}>H5 - Regular / 19px</Text>
            <Text style={styles.h6}>H6 - Bold / 16px</Text>
            <Text style={styles.p1}>P1 - Regular / 16px</Text>
            <Text style={styles.p2}>P2 - this is supposed to be italic.</Text>
            <Text style={styles.p3}>P3 - Medium / 17px</Text>
          </ScrollView>
        </Screen>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: colors.cta_primary,
    padding: 10,
    color: colors.white,
    fontWeight: 'bold',
  },
  h1: {
    fontFamily: 'Mont-Regular',
    fontSize: 37,
    color: colors.text_primary,
  },
  h2: {
    fontFamily: 'Mont-Bold',
    fontSize: 24,
    color: colors.text_primary,
  },
  h3: {
    fontFamily: 'Mont-Bold',
    fontSize: 21,
    color: colors.text_primary,
  },
  h4: {
    fontFamily: 'Mont-SemiBold',
    fontSize: 19,
    color: colors.text_primary,
  },
  h5: {
    fontFamily: 'Mont-Regular',
    fontSize: 19,
    color: colors.text_primary,
  },
  h6: {
    fontFamily: 'Mont-Bold',
    fontSize: 16,
    color: colors.text_primary,
  },
  p1: {
    fontFamily: 'Mont-Regular',
    fontSize: 16,
    color: colors.text_primary,
  },
  p2: {
    fontFamily: 'Mont-Italic',
    fontSize: 16,
    color: colors.text_primary,
  },
  p3: {
    fontFamily: 'Mont-Medium',
    fontSize: 17,
    color: colors.text_primary,
  }
});
