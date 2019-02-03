// @flow
import * as React from 'react';
import {
  View,
  Modal,
  Picker as RNPicker,
  Text,
  TouchableOpacity,
  Animated,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import type { CitizenshipType } from '../resourses/flowTypes';

const styles = StyleSheet.create({
  hiddenPicker: {
    position: 'absolute',
    width: '100%',
    height: 50,
    zIndex: 100,
    opacity: 0,
  },
  smallText: {
    paddingTop: 8,
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: '#919193',
  },
  title: {
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: '#000000',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  touchableClose: {
    flex: 1,
    backgroundColor: '#00000088',
  },
  pickerContainer: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonsPanel: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 42,
    alignItems: 'center',
  },
  button: {
    padding: 8,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

type Props = {
  values: Array<CitizenshipType>,
  selected: string,
  style: any,
  onChangeValue: (value: string) => Promise<void> | void,
  enabled: boolean,
};

type State = {
  isModalVisible: boolean,
  selectedValue: string,
};

const START_ANIMATION = 1000;
const END_ANIMATION = 0;
const ANIMATION_DURATION = 300;

export default class Picker extends React.PureComponent<Props, State> {
  animation: Animated.Value = new Animated.Value(START_ANIMATION);

  state = {
    isModalVisible: false,
    selectedValue: this.props.selected,
  };

  openModal = (): void => {
    if (this.props.enabled) {
      this.animation.setValue(START_ANIMATION);
      Animated.timing(this.animation, {
        toValue: END_ANIMATION,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }).start();
      this.setState({ isModalVisible: true, selectedValue: this.props.selected });
    }
  };

  handleConfirm = (): void => {
    this.props.onChangeValue(this.state.selectedValue);
    this.handleCloseModal();
  };

  handleCloseModal = (): void => {
    this.setState({ isModalVisible: false });
  };

  handleChangeValue = (selectedValue: string) => {
    this.setState({ selectedValue });
  };

  handleChangeValueForAndroid = (selectedValue: string) => {
    this.setState({ selectedValue });
    this.props.onChangeValue(selectedValue);
  };

  renderModal(): React.Node {
    const { values } = this.props;
    return (
      <Modal
        animationType="fade"
        supportedOrientations={['portrait', 'landscape']}
        transparent
        visible={this.state.isModalVisible}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.handleCloseModal}
          style={styles.touchableClose}
        />
        <Animated.View
          style={[styles.pickerContainer, { transform: [{ translateY: this.animation }] }]}
        >
          <SafeAreaView style={styles.buttonsPanel}>
            <Text onPress={this.handleCloseModal} style={styles.button}>
              Cancel
            </Text>
            <Text onPress={this.handleConfirm} style={styles.button}>
              Done
            </Text>
          </SafeAreaView>
          <RNPicker
            enabled={this.props.enabled}
            onValueChange={this.handleChangeValue}
            selectedValue={this.state.selectedValue}
          >
            {values.map(value => (
              <RNPicker.Item key={value.code} label={value.label} value={value.label} />
            ))}
          </RNPicker>
        </Animated.View>
      </Modal>
    );
  }

  render(): React.Node {
    const { selected, style } = this.props;
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <Text disabled={!this.props.enabled} onPress={this.openModal} style={style}>
            {selected}
          </Text>
          {this.renderModal()}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={style}>{selected}</Text>
        <RNPicker
          enabled={this.props.enabled}
          onValueChange={this.handleChangeValueForAndroid}
          selectedValue={selected}
          style={styles.hiddenPicker}
        >
          {this.props.values.map(value => (
            <RNPicker.Item key={value.code} label={value.label} value={value.label} />
          ))}
        </RNPicker>
      </View>
    );
  }
}
