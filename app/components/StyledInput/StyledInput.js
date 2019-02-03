// @flow

import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { bind } from '../../lib/decorators';
import { styles } from './styles';
import {
  INPUT_BACKGROUND_COLOR_WRONG,
  INPUT_BACKGROUND_COLOR,
  INPUT_BORDER_COLOR,
  INPUT_BORDER_COLOR_WRONG,
} from '../../resourses/colors';
import type { Style } from '../../resourses/flowTypes';

type Props = {
  onChangeText: (value: string) => void,
  placeholder: string,
  title: string,
  value: string,
  error: string,
  textInputStyle: Style,
  onLayout: (data: any) => void,
};

type State = {
  error: boolean,
};

class StyledInput extends Component<Props, State> {
  state = {
    error: false,
  };

  // $FlowFixMe
  @bind
  checkValid() {
    if (this.props.value === '') {
      this.setState({
        error: true,
      });
    }
    console.log(this.state);
  }

  // $FlowFixMe
  @bind
  showError() {
    this.setState({
      error: true,
    });
  }

  // $FlowFixMe
  @bind
  dismissError() {
    this.setState({
      error: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          {...this.props}
          onChangeText={this.props.onChangeText}
          style={[
            styles.input,
            {
              backgroundColor: this.state.error
                ? INPUT_BACKGROUND_COLOR_WRONG
                : INPUT_BACKGROUND_COLOR,
              borderColor: this.state.error ? INPUT_BORDER_COLOR_WRONG : INPUT_BORDER_COLOR,
            },
            this.props.textInputStyle,
          ]}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onEndEditing={this.checkValid}
          onLayout={this.props.onLayout}
        />
        {this.state.error && this.props.error ? (
          <Text style={styles.error}>{this.props.error}</Text>
        ) : null}
      </View>
    );
  }
}

export default StyledInput;
