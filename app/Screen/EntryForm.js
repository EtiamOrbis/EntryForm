// flow

import React, { Component } from 'react';
import {
  Text, SafeAreaView, ScrollView, View, TextInput, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import type { UserState } from '../resourses/flowTypes';
import * as strings from '../resourses/strings';
import * as colors from '../resourses/colors';
import { setSurname, setName } from '../actions/userActions';
import StyledInput from '../components/StyledInput';

type Props = {
  user: UserState,
  setName: (name: string) => void,
  setSurname: (name: string) => void,
};
class EntryForm extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <ScrollView>
          <Text style={{ fontSize: 20, paddingLeft: 20 }}>{strings.PASSENGER_DATA}</Text>
          <View
            style={{
              backgroundColor: colors.BACKGROUND,
              margin: 10,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 17 }}>{strings.PASSENGER_ADULT}</Text>
              <TouchableOpacity>
                <Text>{strings.CLEAR}</Text>
              </TouchableOpacity>
            </View>
            <StyledInput
              onChangeText={this.props.setSurname}
              title={strings.SURNAME}
              value={this.props.user.surname}
            />
            <StyledInput
              onChangeText={this.props.setName}
              title={strings.NAME}
              value={this.props.user.name}
            />
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
