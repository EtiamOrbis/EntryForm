// @flow

import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import type {
  UserState,
  BirthState,
  CitizenshipType,
  DocumentTypeState,
  DocumentNumberState,
  DocumentExpiryState,
  SexTypeState,
} from '../resourses/flowTypes';
import * as strings from '../resourses/strings';
import { setSurname, setName } from '../actions/userActions';
import { setBirthDay, setBirthMonth, setBirthYear } from '../actions/birthActions';
import StyledInput from '../components/StyledInput';
import { styles } from './styles';
import { setSex } from '../actions/sexActions';
import { bind } from '../lib/decorators';
import * as colors from '../resourses/colors';
import PASS_COUNTRY from '../resourses/countries';
import { setCitizenship } from '../actions/citizenshipActions';
import StyledPicker from '../components/StyledPicker/StyledPicker';
import DOCUMENT_TYPES from '../resourses/documents';
import {
  setDocumentType,
  setDocumentSeries,
  setDocumentNumber,
  setDocumentExpiryDay,
  setDocumentExpiryMonth,
  setDocumentExpiryYear,
} from '../actions/documentActions';
import { IS_IOS } from '../resourses/constants';
import { setClear } from '../actions/clearAction';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type Props = {
  user: UserState,
  birth: BirthState,
  sex: SexTypeState,
  citizenship: CitizenshipType,
  documentType: DocumentTypeState,
  documentNumber: DocumentNumberState,
  documentExpiry: DocumentExpiryState,
  setName: (name: string) => void,
  setSurname: (name: string) => void,
  setBirthDay: (day: string) => void,
  setBirthMonth: (month: string) => void,
  setBirthYear: (year: string) => void,
  setSex: (sex: string) => void,
  setCitizenship: (citizenshipLabel: string) => void,
  setDocumentType: (documentTypeLabel: string) => void,
  setDocumentSeries: (documentSeries: string) => void,
  setDocumentNumber: (documentNumber: string) => void,
  setDocumentExpiryDay: (day: string) => void,
  setDocumentExpiryMonth: (month: string) => void,
  setDocumentExpiryYear: (year: string) => void,
  setClear: () => void,
};

type State = {
  width: number,
};

class EntryForm extends Component<Props, State> {
  seriesRef: ?StyledInput = null;

  state = {
    width: (SCREEN_WIDTH - 20) / 3,
  };

  @bind
  onLayoutChanges(data) {
    this.setState({ width: data.nativeEvent.layout.width + 20 });
  }

  @bind
  setDocumentSeries(text: string) {
    this.props.setDocumentSeries(text);
  }

  @bind
  seriesMaxLength() {
    if (this.props.documentType.id === 1) {
      return 2;
    }
    if (this.props.documentType.id === 2) {
      return 4;
    }
    return 6;
  }

  @bind
  changeSexMale() {
    this.props.setSex('male');
  }

  @bind
  changeSexFemale() {
    this.props.setSex('female');
  }

  @bind
  seriesSetRef(seriesRef) {
    this.seriesRef = seriesRef;
  }

  @bind
  send() {
    if (this.sendValidat()) {
      const method = {
        surname: this.props.user.surname,
        name: this.props.user.name,
        birth: `${this.props.birth.day}-${this.props.birth.month}-${this.props.birth.year}`,
        sex: this.props.sex.value,
        citizenship: this.props.citizenship,
        documentType: this.props.documentType,
        documentNumber: `${this.props.documentNumber.series}-${this.props.documentNumber.number}`,
        documentExpiry: `${this.props.documentExpiry.day}-${this.props.documentExpiry.month}-${
          this.props.documentExpiry.year
        }`,
      };
      Alert.alert(
        'Введенные данные',
        JSON.stringify(method),
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: true },
      );
    }
  }

  sendValidat() {
    if (
      this.props.birth.valid
      && this.props.documentExpiry.valid
      && this.props.documentNumber.numberValid
      && this.props.documentNumber.seriesValid
      && this.props.sex.valid
      && this.props.user.valid
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : 'none'} enabled>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.header}>{strings.PASSENGER_DATA}</Text>
            <View style={styles.inputsWrapper}>
              <View style={styles.formTitle}>
                <Text style={{ fontSize: 17 }}>{strings.PASSENGER_ADULT}</Text>
                <TouchableOpacity onPress={this.props.setClear}>
                  <Text style={{ color: colors.BLUE_COLOR }}>{strings.CLEAR}</Text>
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
                  textInputStyle={styles.dateTextInput}
                  keyboardType="number-pad"
                  maxLength={2}
                />
                <StyledInput
                  onChangeText={this.props.setBirthMonth}
                  value={this.props.birth.month}
                  placeholder={strings.MM}
                  textInputStyle={styles.dateTextInput}
                  keyboardType="number-pad"
                  maxLength={2}
                  onLayout={this.onLayoutChanges}
                />
                <StyledInput
                  onChangeText={this.props.setBirthYear}
                  value={this.props.birth.year}
                  placeholder={strings.YYYY}
                  textInputStyle={styles.dateTextInput}
                  keyboardType="number-pad"
                  maxLength={4}
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
                          this.props.sex.value === 'male'
                            ? colors.SELECTED_SEX_BACKGROUND
                            : colors.INPUT_BACKGROUND_COLOR,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color:
                          this.props.sex.value === 'male'
                            ? colors.SELECTED_SEX_TEXT_COLOR
                            : colors.SEX_TEXT_COLOR,
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
                          this.props.sex.value === 'female'
                            ? colors.SELECTED_SEX_BACKGROUND
                            : colors.INPUT_BACKGROUND_COLOR,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color:
                          this.props.sex.value === 'female'
                            ? colors.SELECTED_SEX_TEXT_COLOR
                            : colors.SEX_TEXT_COLOR,
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
              <StyledPicker
                enabled
                onChangeValue={this.props.setDocumentType}
                selected={this.props.documentType.label}
                title={strings.DOCUMENT}
                values={DOCUMENT_TYPES}
              />
              <View style={styles.dateWrapper}>
                <View style={{ width: this.state.width }}>
                  <StyledInput
                    autoCapitalize="characters"
                    onChangeText={this.setDocumentSeries}
                    title={strings.SERIES}
                    value={this.props.documentNumber.series}
                    textInputStyle={styles.dateTextInput}
                    keyboardType={this.props.documentType.id === 3 ? 'default' : 'number-pad'}
                    maxLength={this.seriesMaxLength()}
                    ref={this.seriesSetRef}
                    valid={this.props.documentNumber.seriesValid}
                  />
                </View>
                <StyledInput
                  onChangeText={this.props.setDocumentNumber}
                  title={strings.NUMBER}
                  value={this.props.documentNumber.number}
                  textInputStyle={styles.dateTextInput}
                  keyboardType="number-pad"
                  maxLength={this.props.documentType.id === 1 ? 7 : 6}
                  valid={this.props.documentNumber.numberValid}
                />
              </View>
              <View style={styles.dateWrapper}>
                <StyledInput
                  editable={this.props.documentType.id === 1}
                  onChangeText={this.props.setDocumentExpiryDay}
                  title={strings.DATE_OF_EXPIRY}
                  value={this.props.documentExpiry.day}
                  placeholder={strings.DD}
                  textInputStyle={{
                    textAlign: 'center',
                    backgroundColor:
                      this.props.documentType.id === 1
                        ? colors.INPUT_BACKGROUND_COLOR
                        : colors.BACKGROUND,
                  }}
                  keyboardType="number-pad"
                  maxLength={2}
                />
                <StyledInput
                  editable={this.props.documentType.id === 1}
                  onChangeText={this.props.setDocumentExpiryMonth}
                  value={this.props.documentExpiry.month}
                  placeholder={strings.MM}
                  textInputStyle={{
                    textAlign: 'center',
                    backgroundColor:
                      this.props.documentType.id === 1
                        ? colors.INPUT_BACKGROUND_COLOR
                        : colors.BACKGROUND,
                  }}
                  keyboardType="number-pad"
                  maxLength={2}
                  onLayout={this.onLayoutChanges}
                />
                <StyledInput
                  editable={this.props.documentType.id === 1}
                  onChangeText={this.props.setDocumentExpiryYear}
                  value={this.props.documentExpiry.year}
                  placeholder={strings.YYYY}
                  textInputStyle={{
                    textAlign: 'center',
                    backgroundColor:
                      this.props.documentType.id === 1
                        ? colors.INPUT_BACKGROUND_COLOR
                        : colors.BACKGROUND,
                  }}
                  keyboardType="number-pad"
                  maxLength={2}
                />
              </View>
            </View>
            <TouchableOpacity
              disabled={!this.sendValidat()}
              onPress={this.send}
              style={[
                styles.sendButton,
                {
                  backgroundColor: this.sendValidat()
                    ? colors.BLUE_COLOR
                    : colors.BACKGROUND,
                },
              ]}
            >
              <Text style={styles.sendButtonText}>{strings.SEND}</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
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
    setDocumentType,
    setDocumentSeries,
    setDocumentNumber,
    setDocumentExpiryDay,
    setDocumentExpiryMonth,
    setDocumentExpiryYear,
    setClear,
  },
)(EntryForm);
