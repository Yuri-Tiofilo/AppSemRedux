import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { title, functionOnPress } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0d47a1" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={functionOnPress}>
          <Icon name="sign-out" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigation(Header);
