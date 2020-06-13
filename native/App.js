import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AppStyle, { TextStyle, SubTextStyle } from './AppStyle'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <AppStyle>
      <TextStyle>Welcome to QMath !!</TextStyle>
      <SubTextStyle>To get started, edit App.js</SubTextStyle>
      <SubTextStyle>{instructions}</SubTextStyle>
    </AppStyle>
  );
}
