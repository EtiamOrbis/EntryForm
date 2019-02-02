import React, { Component } from 'react';
import {
  Text, View, TextInput, StyleSheet,
} from 'react-native';
import * as colors from '../resourses/colors';

type Props = {
  onChangeText: (value: string) => void,
  placeholder: string,
  title: string,
  value: string,
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  input: {
    marginTop: 10,
    backgroundColor: colors.INPUT_BACKGROUND_COLOR,
    borderColor: colors.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: '100%',
    paddingLeft: 5,
  },
});

class StyledInput extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          onChangeText={this.props.onChangeText}
          style={styles.input}
          placeholder={this.props.placeholder}
          value={this.props.value}
        />
      </View>
    );
  }
}

export default StyledInput;
