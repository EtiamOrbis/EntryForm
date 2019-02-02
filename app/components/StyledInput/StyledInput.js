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

type Props = {
  onChangeText: (value: string) => void,
  placeholder: string,
  title: string,
  value: string,
  error: string,
};

type State = {
  error: boolean,
};

class StyledInput extends Component<Props, State> {
  state = {
    error: false,
  };

  @bind
  checkValid() {
    if (this.props.value === '') {
      this.setState({
        error: true,
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          onChangeText={this.props.onChangeText}
          style={[
            styles.input,
            {
              backgroundColor: this.state.error
                ? INPUT_BACKGROUND_COLOR_WRONG
                : INPUT_BACKGROUND_COLOR,
              borderColor: this.state.error ? INPUT_BORDER_COLOR_WRONG : INPUT_BORDER_COLOR,
            },
          ]}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onEndEditing={this.checkValid}
        />
        {this.state.error ? <Text style={styles.error}>{this.props.error}</Text> : null}
      </View>
    );
  }
}

export default StyledInput;
