import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Catalog, Home } from '../Pages';


const Stack = createStackNavigator();

const Routes:React.FC =() =>{
  return(
    //fica em volta das telas
    <Stack.Navigator>  
      <Stack.Screen 
        name="Home" 
        component={Home}
      /> 
      <Stack.Screen 
        name="Catalog" 
        component={Catalog}
      />
       
    </Stack.Navigator>
  )
}

export default Routes;