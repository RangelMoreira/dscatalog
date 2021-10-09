import React, { useState } from 'react';

import { View } from 'react-native';
import { TabBar } from '../../components';

import Categories from './Categories';
import Products from './Products/ListProducts';
import FormProduct from './Products/FormProduct';
import Users from './Users';



const DashBoard: React.FC = () => {

  const [screen, setScreen] = useState("products");

  return (
    <View >
      <TabBar screen={screen} setScreen={setScreen} />
      {/* O set screen serve para fazer a navegação entre as páginas */}
      {screen === "products" && <Products setScreen={setScreen}/>}
      {screen === "newProduct" && <FormProduct setScreen={setScreen}/>}
      {screen === "categories" && <Categories />}
      {screen === "users" && <Users />}
    </View>
  )
}

export default DashBoard;