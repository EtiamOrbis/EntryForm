// flow

import React, { Component } from 'react';
import {
  Text, SafeAreaView, ScrollView, View, TextInput, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import * as strings from '../resourses/strings';
import * as colors from '../resourses/colors';

type Props = {};
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
            <View style={{ marginVertical: 10 }}>
              <Text>{strings.SURNAME}</Text>
              <TextInput
                style={{
                  marginTop: 10,
                  backgroundColor: colors.INPUT_BACKGROUND_COLOR,
                  borderColor: colors.INPUT_BORDER_COLOR,
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  width: '100%',
                  paddingLeft: 5,
                }}
                placeholder={strings.LATIN_LETTERS}
              />
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
  {},
)(EntryForm);
