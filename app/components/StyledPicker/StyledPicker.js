// @flow

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import type { CitizenshipType } from '../../resourses/flowTypes';
import Picker from '../Picker';

type Props = {
  onChangeValue: (value: string) => void,
  title: string,
  selected: string,
  values: Array<CitizenshipType | string>,
};

type State = {
  error: boolean,
};

class StyledPicker extends Component<Props, State> {
  render() {
    return (
      <View style={styles.citizenshipContainer}>
        <Text>{this.props.title}</Text>
        <View style={styles.pickerWrapper}>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.pickerTextStyle}
              enabled
              onChangeValue={this.props.onChangeValue}
              selected={this.props.selected}
              values={this.props.values}
            />
            <Image style={styles.arrowDown} source={{ uri: 'arrowdown' }} />
          </View>
        </View>
      </View>
    );
  }
}

export default StyledPicker;
