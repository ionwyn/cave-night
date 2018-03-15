import Tabbar from 'react-native-tabbar-bottom'
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';

export default class BottomBar extends Component {
  constructor() {
		super();

		this.state = {
			page: "HomeScreen",
		};
  }
  render() {
    return (
      <Tabbar
        stateFunc={(tab) => {
          this.setState({page: tab.page})
          Actions[tab.page]()
        }}
        activePage={this.state.page}
        tabbarBgColor='#151515'
        tabs={[
          {
            page: "homeScreen",
            icon: "home",
            badgeNumber: 1,
          },
          {
            page: "cartScreen",
            icon: "ios-cart",
          },
          {
            page: "profileScreen",
            icon: "person",
          }
        ]}
      />
    );
  }
}
