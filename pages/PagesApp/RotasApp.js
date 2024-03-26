import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import CadDiario from './CadaDiario';
import AlterarDiario from './AlterarDiario';

const Stack = createStackNavigator();

export default function RotasApp(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerTintColor: '#e9ac234'}}/>
            <Stack.Screen name="CadDiario" component={CadDiario} options={{headerTintColor: '#e9ac234'}}/>
            <Stack.Screen name="AlterarDiario" component={AlterarDiario} options={{headerTintColor: '#e9ac234'}}/>
        </Stack.Navigator>
    );
}