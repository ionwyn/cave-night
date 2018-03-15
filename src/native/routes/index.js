import React, { Component } from 'react';
// import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

import LoginScreen from '../components/LoginScreen';
import SecondScreen from '../components/SecondScreen';
import profileScreen from '../components/profileScreen';
import homeScreen from '../components/homeScreen';
import cartScreen from '../components/cartScreen';

export default class MainLogin extends Component {
  render() {
	  return (
      <Router>
        <Scene key="root">
          <Scene key="loginScreen"
            component={LoginScreen}
            animation='fade'
            hideNavBar={true}
            initial={true}
          />
          <Scene key="secondScreen"
            component={SecondScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="profileScreen"
            component={profileScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="homeScreen"
            component={homeScreen}
            animation='fade'
            hideNavBar={true}
          />
          <Scene key="cartScreen"
            component={cartScreen}
            animation='fade'
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
  // <Stack>
  //   <Scene hideNavBar>
  //     <Tabs
  //       key="tabbar"
  //       swipeEnabled
  //       type="replace"
  //       showLabel={false}
  //       {...DefaultProps.tabProps}
  //     >
  //       <Stack
  //         key="home"
  //         title={AppConfig.appName.toUpperCase()}
  //         icon={() => <Icon name="planet" {...DefaultProps.icons} />}
  //         {...DefaultProps.navbarProps}
  //       >
  //         <Scene key="home" component={AboutComponent} />
  //       </Stack>
  //
  //       <Stack
  //         key="recipes"
  //         title="RECIPES"
  //         icon={() => <Icon name="book" {...DefaultProps.icons} />}
  //         {...DefaultProps.navbarProps}
  //       >
  //         <Scene key="recipes" component={RecipesContainer} Layout={RecipesComponent} />
  //       </Stack>
  //
  //       <Stack
  //         key="profile"
  //         title="PROFILE"
  //         icon={() => <Icon name="contact" {...DefaultProps.icons} />}
  //         {...DefaultProps.navbarProps}
  //       >
  //         <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
  //         <Scene
  //           back
  //           key="signUp"
  //           title="SIGN UP"
  //           {...DefaultProps.navbarProps}
  //           component={SignUpContainer}
  //           Layout={SignUpComponent}
  //         />
  //         <Scene
  //           back
  //           key="login"
  //           title="LOGIN"
  //           {...DefaultProps.navbarProps}
  //           component={LoginContainer}
  //           Layout={LoginComponent}
  //         />
  //         <Scene
  //           back
  //           key="forgotPassword"
  //           title="FORGOT PASSWORD"
  //           {...DefaultProps.navbarProps}
  //           component={ForgotPasswordContainer}
  //           Layout={ForgotPasswordComponent}
  //         />
  //         <Scene
  //           back
  //           key="updateProfile"
  //           title="UPDATE PROFILE"
  //           {...DefaultProps.navbarProps}
  //           component={UpdateProfileContainer}
  //           Layout={UpdateProfileComponent}
  //         />
  //       </Stack>
  //     </Tabs>
  //   </Scene>
  //
  //   <Scene
  //     back
  //     clone
  //     key="recipe"
  //     title="RECIPE"
  //     {...DefaultProps.navbarProps}
  //     component={RecipesContainer}
  //     Layout={RecipeViewComponent}
  //   />
  // </Stack>
