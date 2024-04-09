import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import AlterarDiario from '../PagesApp/AlterarDiario';
import CadDiario from '../PagesApp/CadDiario';

const Stack = createStackNavigator();

export default function RotasApp(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CadDiario" component={CadDiario} />
            <Stack.Screen name="AlterarDiario" component={AlterarDiario} />
        </Stack.Navigator>
    );
}