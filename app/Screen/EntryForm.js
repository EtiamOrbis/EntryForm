// flow

import React, { Component } from 'react';
import {
  Text, SafeAreaView, ScrollView, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import type { UserState } from '../resourses/flowTypes';
import * as strings from '../resourses/strings';
import { setSurname, setName } from '../actions/userActions';
import StyledInput from '../components/StyledInput';
import { styles } from './styles';

type Props = {
  user: UserState,
  setName: (name: string) => void,
  setSurname: (name: string) => void,
};
class EntryForm extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>{strings.PASSENGER_DATA}</Text>
          <View style={styles.inputsWrapper}>
            <View style={styles.formTitle}>
              <Text style={{ fontSize: 17 }}>{strings.PASSENGER_ADULT}</Text>
              <TouchableOpacity>
                <Text>{strings.CLEAR}</Text>
              </TouchableOpacity>
            </View>
            <StyledInput
              onChangeText={this.props.setSurname}
              title={strings.SURNAME}
              value={this.props.user.surname}
              error={strings.REQUIRED_FIELD}
            />
            <StyledInput
              onChangeText={this.props.setName}
              title={strings.NAME}
              value={this.props.user.name}
              error={strings.REQUIRED_FIELD}
            />
            <View style={styles.dateWrapper}>
              <StyledInput
                onChangeText={this.props.setName}
                title={strings.DATE_OF_BIRTH}
                value={this.props.user.name}
              />
              <StyledInput onChangeText={this.props.setName} value={this.props.user.name} />
              <StyledInput onChangeText={this.props.setName} value={this.props.user.name} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  state => ({
    birth: state.birth,
    citizenship: state.citizenship,
    documentExpiry: state.documentExpiry,
    documentNumber: state.documentNumber,
    documentType: state.documentType,
    sex: state.sex,
    user: state.user,
  }),
  { setSurname, setName },
)(EntryForm);
