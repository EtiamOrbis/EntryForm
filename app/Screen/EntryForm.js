// flow

import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';

type Props = {};
export default class EntryForm extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <Text>Welcome to React Native!</Text>
      </SafeAreaView>
    );
  }
}
