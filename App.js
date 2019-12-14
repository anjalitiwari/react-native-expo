import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import myTv from './screens/myTv';

const App = createStackNavigator({
  Home: {
    screen: myTv,
  },
});

export default createAppContainer(App);
