import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Name,
  Avatar,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './style';
import api from '../../services/api';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem('@Git:username');
    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Login');
  };

  componentDidUpdate(_, prevState) {
    const { users } = this.state;
    if (prevState.users !== users) {
      AsyncStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleSubmit = async () => {
    const { users, newUser } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    this.setState({
      users: [...users, data],
      newUser: '',
      loading: false,
    });
    Keyboard.dismiss();
  };

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  render() {
    const { users, newUser, loading } = this.state;
    return (
      <View>
        <Header title="Favoritos" functionOnPress={this.signOut} />
        <Container>
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Adicionar usuário"
              value={newUser}
              onChangeText={text => this.setState({ newUser: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleSubmit}
            />

            <SubmitButton loading={loading} onPress={this.handleSubmit}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Icon name="add" size={20} color="#eee" />
              )}
            </SubmitButton>
          </Form>
          <List
            data={users}
            keyExtractor={user => user.login}
            renderItem={({ item }) => (
              <User>
                <Avatar source={{ uri: item.avatar }} />
                <Name>{item.name} </Name>
                <Bio>{item.bio}</Bio>

                <ProfileButton onPress={() => this.handleNavigate(item)}>
                  <ProfileButtonText> VER PERFIL </ProfileButtonText>
                </ProfileButton>
              </User>
            )}
          />
        </Container>
      </View>
    );
  }
}
