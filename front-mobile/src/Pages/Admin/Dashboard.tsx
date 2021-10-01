import React, { useState } from 'react';

import { View } from 'react-native';
import { TabBar } from '../../components';

import Categories from './Categories';
import Products from './Products';
import Users from './Users';


const DashBoard: React.FC = () => {

  const [screen, setScreen] = useState("products");

  return (
    <View >
      <TabBar screen={screen} setScreen={setScreen} />
      {screen === "products" && <Products />}
      {screen === "categories" && <Categories />}
      {screen === "users" && <Users />}
    </View>
  )
}

export default DashBoard;