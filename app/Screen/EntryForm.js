// @flow

import React, { Component } from 'react';
import {
  Text, SafeAreaView, ScrollView, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import type { UserState, BirthState, CitizenshipType } from '../resourses/flowTypes';
import * as strings from '../resourses/strings';
import { setSurname, setName } from '../actions/userActions';
import { setBirthDay, setBirthMonth, setBirthYear } from '../actions/birthActions';
import StyledInput from '../components/StyledInput';
import { styles } from './styles';
import { setSex } from '../actions/sexActions';
import { bind } from '../lib/decorators';
import {
  SELECTED_SEX_BACKGROUND,
  INPUT_BACKGROUND_COLOR,
  SEX_TEXT_COLOR,
  SELECTED_SEX_TEXT_COLOR,
} from '../resourses/colors';
import PASS_COUNTRY from '../resourses/countries';
import { setCitizenship } from '../actions/citizenshipActions';
import StyledPicker from '../components/StyledPicker/StyledPicker';

type Props = {
  user: UserState,
  birth: BirthState,
  sex: string,
  citizenship: CitizenshipType,
  setName: (name: string) => void,
  setSurname: (name: string) => void,
  setBirthDay: (day: string) => void,
  setBirthMonth: (month: string) => void,
  setBirthYear: (month: string) => void,
  setSex: (sex: string) => void,
  setCitizenship: (citizenshipLabel: string) => void,
};
class EntryForm extends Component<Props> {
  // $FlowFixMe
  @bind
  changeSexMale() {
    this.props.setSex('male');
  }

  // $FlowFixMe
  @bind
  changeSexFemale() {
    this.props.setSex('female');
  }

  render() {
    console.log(this.props);

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
                onChangeText={this.props.setBirthDay}
                title={strings.DATE_OF_BIRTH}
                value={this.props.birth.day}
                placeholder={strings.DD}
                textInputStyle={{ textAlign: 'center' }}
                keyboardType="number-pad"
                maxLength={2}
              />
              <StyledInput
                onChangeText={this.props.setBirthMonth}
                value={this.props.birth.month}
                placeholder={strings.MM}
                textInputStyle={{ textAlign: 'center' }}
                keyboardType="number-pad"
                maxLength={2}
              />
              <StyledInput
                onChangeText={this.props.setBirthYear}
                value={this.props.birth.year}
                placeholder={strings.YYYY}
                textInputStyle={{ textAlign: 'center' }}
                keyboardType="number-pad"
                maxLength={2}
              />
            </View>
            <View style={styles.sexContainer}>
              <Text>{strings.SEX}</Text>
              <View style={styles.sexButtonsWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={this.changeSexMale}
                  style={[
                    styles.sexButton,
                    styles.leftButton,
                    {
                      backgroundColor:
                        this.props.sex === 'male'
                          ? SELECTED_SEX_BACKGROUND
                          : INPUT_BACKGROUND_COLOR,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: this.props.sex === 'male' ? SELECTED_SEX_TEXT_COLOR : SEX_TEXT_COLOR,
                    }}
                  >
                    {strings.M}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={this.changeSexFemale}
                  style={[
                    styles.sexButton,
                    styles.rightButton,
                    {
                      backgroundColor:
                        this.props.sex === 'female'
                          ? SELECTED_SEX_BACKGROUND
                          : INPUT_BACKGROUND_COLOR,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: this.props.sex === 'female' ? SELECTED_SEX_TEXT_COLOR : SEX_TEXT_COLOR,
                    }}
                  >
                    {strings.W}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <StyledPicker
              enabled
              onChangeValue={this.props.setCitizenship}
              selected={this.props.citizenship.label}
              title={strings.CITIZENSHIP}
              values={PASS_COUNTRY}
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
  {
    setSurname,
    setName,
    setBirthDay,
    setBirthMonth,
    setBirthYear,
    setSex,
    setCitizenship,
  },
)(EntryForm);
