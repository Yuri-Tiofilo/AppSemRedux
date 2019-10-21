import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/Login';
import Main from './pages/Main';
import User from './pages/User';

// createAppContainer é as configuração de roteamento de rotas que vamos utilizar,sempre antes de todas as rotas
// createStackNavigator é um tipo de configuração de rotas

const Routes = (userLogged = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Login,
        Main,
        User,
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Login',
      },
      {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#0d47a1',
          },
          headerTintColor: '#ffffff',
        },
      }
    )
  );

export default Routes;
